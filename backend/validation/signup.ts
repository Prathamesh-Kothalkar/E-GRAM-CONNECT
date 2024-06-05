import zod from "zod";

const signupBody = zod.object({
    username:zod.string(),
    name:zod.string(),
    lastName:zod.string(),
    email:zod.string().email(),
    phone: zod.number().int().min(1000000000, "Phone number must be at least 10 digits"),
    password:zod.string().min(6)
})

export default signupBody;