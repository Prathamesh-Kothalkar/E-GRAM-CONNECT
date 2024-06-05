import zod from "zod"

const projectBody=zod.object({
    img_src:zod.string().array(),
    name:zod.string(),
    description:zod.string(),
    budget:zod.number(),
    timeline:zod.string(),
    status:zod.string(),
    links:zod.string().array()
})

export default projectBody;