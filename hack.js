export async function main(ns) {
  var host = ns.getHostname()
  while(true)
    await ns.hack(host)
}
