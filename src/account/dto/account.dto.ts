import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateAccountDto {
    @IsNotEmpty()
    store_name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    contact_person_name: string;

    @IsNotEmpty()
    mobile: string;

    alternate_mobile: string;

    @IsNotEmpty()
    werehouse: string;

    @IsNotEmpty()
    route: string;

    @IsNotEmpty()
    store_category: string;

    grade: string;

    @IsNotEmpty()
    gst: string;

    @IsNotEmpty()
    street_name: string;

    panchayath: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    state: string;

    @IsNotEmpty()
    district: string;

    @IsNotEmpty()
    pincode: string;

    @IsNotEmpty()
    description: string
}
