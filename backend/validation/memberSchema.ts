import zod from "zod";

const memberBody=zod.object({
    img_src:zod.string(),
    name:zod.string(),
    lastName:zod.string(),
    designation:zod.string(),
    ward:zod.number(),
    phone: zod.number().int().min(1000000000, "Phone number must be at least 10 digits")
})

export default memberBody;