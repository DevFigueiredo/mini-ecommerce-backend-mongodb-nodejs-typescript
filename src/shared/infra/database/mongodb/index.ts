import mongoose from 'mongoose'

class Database {
  public connect (urlCluster: string): void {
    try {
      mongoose.connect(urlCluster)
    } catch (error) {
      console.log(error)

      // console.log('Erro ao comunicar-se a base de dados')
    }
  }
}

export default new Database()