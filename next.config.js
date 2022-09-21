/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI:  "mongodb+srv://RashSaucer86:Lucifer2002@cluster0.z3sn7pv.mongodb.net/?retryWrites=true&w=majority"
  },  
  images: {
      domains: ['images.unsplash.com']
  }

}


module.exports = nextConfig
