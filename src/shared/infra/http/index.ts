/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { estabiishmentApp } from '../../../main/apps/localApp'

estabiishmentApp.listen(4000, () => console.log(`Server started on port ${4000}`))
