import zod from "zod";

const griveanceBody=zod.object({
    title:zod.string(),
    description:zod.string(),
    category:zod.string(),
    status:zod.string(),
    evidence:zod.string().array().optional()
})

export default griveanceBody;