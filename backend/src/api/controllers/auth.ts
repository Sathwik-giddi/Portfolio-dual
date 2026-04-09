import { type Request, type Response } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../../config/db.js';
import { generateToken } from '../../middleware/auth.js';
import { OAuth2Client } from 'google-auth-library';
const SALT_ROUNDS = 10;
let client: OAuth2Client | null = null;

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
            },
        });

        const token = generateToken({ userId: user.id, email: user.email });

        res.status(201).json({
            status: 'success',
            token,
            user: {
                id: user.id,
                email: user.email,
            },
        });
    } catch (error: any) {
        res.status(500).json({ error: 'Registration failed', details: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = generateToken({ userId: user.id, email: user.email });

        res.json({
            status: 'success',
            token,
            user: {
                id: user.id,
                email: user.email,
            },
        });
    } catch (error: any) {
        res.status(500).json({ error: 'Login failed', details: error.message });
    }
};

export const googleLogin = async (req: Request, res: Response) => {
    try {
        const { credential } = req.body; // Google ID Token

        if (!credential) {
            return res.status(400).json({ error: 'Credential is required' });
        }

        console.log('Verifying Google Token...');
        console.log('Client ID from Env:', process.env.GOOGLE_CLIENT_ID);
        console.log('Client ID length:', process.env.GOOGLE_CLIENT_ID?.length);

        if (!client) {
            client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        }

        // Verify the ID Token
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload || !payload.email) {
            return res.status(400).json({ error: 'Invalid Google Token' });
        }

        const { email, name, picture } = payload;

        // Check or Create User
        let user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            const randomPassword = Math.random().toString(36).slice(-8);
            const passwordHash = await bcrypt.hash(randomPassword, SALT_ROUNDS);

            user = await prisma.user.create({
                data: {
                    email,
                    passwordHash,
                    name: name || undefined,
                },
            });
        }

        const token = generateToken({ userId: user.id, email: user.email });

        res.json({
            status: 'success',
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                picture: picture // Send back picture if frontend wants to use it
            },
        });

    } catch (error: any) {
        console.error('Google Auth Error:', error);
        res.status(401).json({ error: 'Google authentication failed', details: error.message });
    }
};

