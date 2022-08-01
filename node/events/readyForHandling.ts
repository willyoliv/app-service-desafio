// import { DATA_ENTITY } from '../utils/constants'

export async function readyForHandlingEvent(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const {
    clients: { oms },
  } = ctx

  const orderId = await ctx.body.orderId
  // console.info('Dados', orderId)
  const data = await oms.order(orderId) as Order
  // console.log(data);

  const productList = data.items


  // const listProductId = productList.map((product: Product) => { productId: product.productId }
  // )

  console.log("LISTA DE PRODUTOS")
  console.log(productList)
  // console.log(listProductId)
  // Pegar valores realmente pago pelos produtos menos descontos e não incluindo taxas e frete
  // const totalItems = data.totals[0].value
  // const discounts = data.totals[1].value
  // const amountPaid = totalItems - discounts

  // // Removendo os centavos do valor pago
  // let amountPaidString = amountPaid.toString()
  // amountPaidString = amountPaidString.slice(0, -2)
  // const amountNumber = parseInt(amountPaidString)

  // // Pegar e-mail e userProfileId do cliente
  // const userProfileId = data.clientProfileData.userProfileId

  // const documents = await masterdata.searchDocuments<
  //   Octopontos
  // >({
  //   dataEntity: DATA_ENTITY,
  //   fields: ['id', 'userId', 'pontos'],
  //   where: `userId=${userProfileId}`,
  //   pagination: { 
  //     page: 1,
  //     pageSize: 1
  //   },
  //   schema: 'v0'
  // })

  // console.log("Documento", documents)
  // if(documents.length != 0){
  //   const newAmountOfPoints = documents[0].pontos + amountNumber
  //   await masterdata.updatePartialDocument({
  //     dataEntity: DATA_ENTITY,
  //     fields: {
  //       userId: userProfileId,
  //       pontos: newAmountOfPoints,
  //     },
  //     id: documents[0].id,
  //   })
  // } else {
  //   await masterdata.createDocument({
  //     dataEntity: DATA_ENTITY,
  //     fields: {userId: userProfileId, pontos: amountNumber},
  //     schema: 'v0'
  //   })
  // }

  await next()
}


interface Order {
  items: Product[]
}

interface Product {
  productId: string
}