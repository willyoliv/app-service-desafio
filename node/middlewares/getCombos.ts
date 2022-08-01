// import { DATA_ENTITY } from '../utils/constants'

export async function getCombos(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { comboAPI },
  } = ctx
  // console.log(ctx)
  console.log("Hello world")

  // ctx.status = 200

  // const userId = ctx.vtex.route.params.userId
comboAPI.getCombos().then((data: any) => {
    console.log(data)
  }).catch((err: any) => {
    console.log(err)
  }).finally(() => {
    console.log("FINALIZEI A CHAMADA")
  })

  // console.log(response)

  // const documentos = await masterdata.searchDocuments<
  //   Octopontos
  // >({
  //   dataEntity: DATA_ENTITY,
  //   fields: ['id', 'userId', 'pontos'],
  //   where: `userId=${userId}`,
  //   pagination: {
  //     page: 1,
  //     pageSize: 1
  //   },
  //   schema: 'v0'
  // })
  // ctx.body = documentos ? documentos[0] : null
  // ctx.set('cache-control', 'no-cache')
  // ctx.body(response)
  await next()
}
// interface Octopontos {
//   id: string
//   userId: string
//   pontos: number
// }