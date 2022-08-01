import { ExternalClient, InstanceOptions, IOContext } from "@vtex/api";

export class ComboAPI extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`http://ec2-18-231-164-74.sa-east-1.compute.amazonaws.com:3000`, context, {
      ...options,
      headers: {
        ...options?.headers,
        'Content-Type': 'application/json',
      },
    })
  }

  public getCombos = () => {
    console.info("CHAMEI A FUNÇÃO DE GET")
    return this.http.get('combo');
  }
}