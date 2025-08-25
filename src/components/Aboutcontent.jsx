import { FaCubesStacked, FaSquareCheck } from 'react-icons/fa6'

const Aboutcontent = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/images/charts.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We provide direct-access trade executions and investment services to sophisticated and newbie investors, active traders and institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-100 sm:text-5xl">
              A secure platform <span className="text-yellow-600">for Global</span> Investors
            </h2>
            <p className="mt-6 text-gray-100 text-lg leading-relaxed">
             Securepegawin Investors is a global asset manager with investment expertise across all major asset classes. 
             We are committed to help people defy uncertainty and invest with confidence.
            Our investment intelligence spans major markets, giving us the size and scale to successfully seek out 
             opportunities that will deliver specific investor outcomes.Powered by five key drivers, our investment process is designed to give investors a 360 degree view of risks and opportunities,
              enabling them to draw on the best ideas from our team around the world. 
              
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
          {/* Mission */}
          <div className="w-full md:w-1/2 bg-gray-800 rounded-[20px] shadow-md p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <FaCubesStacked className="text-[50px] text-white bg-yellow-600 rounded-full p-3" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Committed to Collaboration</h3>
            <p className="text-gray-100 text-lg leading-relaxed">
              We relish being close to the pulse and priorities of clients, and understand the need to deliver, evolve and surpass expectations in a competitive environment. 
              This ambition runs through our partnerships, as we seek to innovate alongside our clients.
            </p>
          </div>

          {/* Vision */}
          <div className="w-full md:w-1/2 bg-gray-800 rounded-[20px] shadow-md p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <FaSquareCheck className="text-[50px] text-white bg-yellow-600 rounded-full p-3" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Connected Across Capabilities</h3>
            <p className="text-gray-100 text-lg leading-relaxed">
              The breadth and connectivity of our business gives us an executional advantage, enabling us to combine data, people and 
              global perspectives 
              to enhance investment decision-making across asset classes.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutcontent
