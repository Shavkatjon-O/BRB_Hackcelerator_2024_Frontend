import { UserProfileType } from "@/types/userProfile";

import CoreAPI from "@/lib/coreApi";


export async function getUser(): Promise<UserProfileType> {
    try {
        const response = await CoreAPI.get('/users/profile/');
        
        return {
            id: response.data.id,
            email: response.data.email,
        }

    } catch (error) {
        console.error("Failed to fetch user data:", error);
        throw error;
    }
}
