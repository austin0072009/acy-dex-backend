import mongoose from "mongoose";

const UserLaunch = new mongoose.Schema(
    {
        walletId: {
            type: String,
            index: true,
            required: true
        },
        projects: [
            {
                projectToken: { type: String },
                allocationAmount: { type: Number },
                allocationBonus: [
                    {
                        bonusName: { type: String },
                        bonusAmount: { type: Number },
                        achieveTime: { type: Date, default: Date.now }
                    }
                ],
                allocationUsed: { type: Number },
                allocationLeft: { type: Number },
                purchaseHistory: [
                    {
                        purchaseTime: { type: Date },
                        purchaseAmount: { type: Number }
                    }
                ],
                vestingHistory: [
                    {
                        vestingTime: { type: Date },
                        vestingAmount: { type: Number }
                    }
                ]
            }
        ],
        assessment: {
            balance: { type: Number },
            contribution: {
                exchange: { type: Number },
                liquidity: { type: Number },
                farm: { type: Number }
            },
            other: { type: Number }
        }
    },
    { timestamps: true }
);

export default UserLaunch;
