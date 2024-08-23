export interface UserProfileType {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    job_title: string;
    phone_number: string;
    date_of_birth: string;
    address: string;
    department: string;
    employment_start_date: string;
    education: string;
    skills: string;
    image: string;
}

export interface User {
    first_name: string;
    last_name: string;
    phone_number: string;
    date_of_birth?: string;
    address?: string;
    job_title?: string;
    department?: string;
    education?: string;
    employment_start_date?: string;
    skills?: string;
    email: string;
  }
  