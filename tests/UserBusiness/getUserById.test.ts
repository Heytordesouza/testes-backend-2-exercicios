import { UserBusiness } from "../../src/business/UserBusiness"
import { USER_ROLES } from "../../src/types"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("getUserById", () => {

    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deve retornar um User", async () => {
        
        const input = {
            id: "id-mock-normal",
            token: "token-mock-normal"
        }

        const response = await userBusiness.getUserById(input)

        expect(response).toStrictEqual({
            id: "id-mock-normal",
            name: "Normal Mock",
            email: "normal@email.com",
            password: "hash-bananinha",
            createdAt: expect.any(String) ,
            role: USER_ROLES.NORMAL
        })
    })
})