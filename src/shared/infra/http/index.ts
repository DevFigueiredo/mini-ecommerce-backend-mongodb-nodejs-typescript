/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { app } from '../../../main/apps/localApp'

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
