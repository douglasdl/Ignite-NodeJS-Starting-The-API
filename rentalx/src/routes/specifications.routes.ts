import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
})

// specificationsRoutes.get("/", (request, response) => {
//     const all = specificationsRepository.list();

//     return response.json(all);
// })

export { specificationsRoutes };