"use server";
import Screening from "../models/screening.model";
import { connectToDB } from "../mongoose";

interface Params {
    filmId: string;
    date: Date;
    audioOption: string;
    seats: {
        row: number;
        seat: number;
        isBooked: boolean;
    }[];
}

export const addScreening = async ({ filmId, date, audioOption, seats }: Params) => {
    try {
        await connectToDB();
        const screening = new Screening({
            filmId,
            date,
            audioOption,
            seats,
        });
        await screening.save();
        return { success: true, message: "Screening added successfully" };
    } catch (error: any) {
        console.log(error);
        return { success: false, message: `Failed to add screening: ${error.message}` };
    }
}