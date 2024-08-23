"use client";

import CoreAPI from "@/lib/coreApi";

export async function getUser() {
    try {
        const response = await CoreAPI.get('/users/user/');
        return response.data;
    } catch (error) {
        console.error("Failed to fetch user data:", error);
        throw error;
    }
}
