/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { bootstrapExpress } from '../../../main/apps/localApp'

bootstrapExpress().listen(4000, () => console.log(`Server started on port ${4000}`))
