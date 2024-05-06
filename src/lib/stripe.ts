import Stripe from 'stripe'

export const stripe = new Stripe(process.env.SECRET_KEY!, {
  appInfo: {
    name: 'E-Shop'
  }
})