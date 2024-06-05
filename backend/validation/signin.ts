import zod from "zod";

const siginBody=zod.object({
    username:zod.string(),
    password:zod.string().min(6),
})

export default siginBody;