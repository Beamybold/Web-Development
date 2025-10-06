const orders = ["Coffee", "Cake", "Juice"];


function delay(message) {
  return new Promise(resolve => setTimeout(resolve, message));
}


async function processOrders(orderList) {
  for (const order of orderList) {
    await delay(2000);
    console.log(`${order} ready`);
  }
}


processOrders(orders);
