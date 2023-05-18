import React from 'react'

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p>I am not a Normal Developer</p>
          <p className="py-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo dolorem distinctio quam culpa provident vero laborum, in ad earum dignissimos officiis quod voluptatem veniam voluptate. Praesentium hic officiis non, dolores, qui possimus, tempore magnam nulla repudiandae sequi pariatur minima temporibus? Error eum nobis fuga velit earum a qui dolor!</p>
          <p className="py-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe doloribus officia dicta, explicabo impedit quas voluptas vitae fugit ex incidunt dolorum, alias voluptatem exercitationem necessitatibus eius voluptatum laudantium temporibus tenetur dolorem officiis ullam ut vel. Dolorum eius magnam dolor ducimus, accusantium earum. Ab numquam quibusdam vitae deserunt quo omnis, quia perferendis hic nulla harum repellat! Maiores eligendi enim maxime quaerat nulla ab excepturi, cumque consectetur? Quo odit perspiciatis quia odio!</p>
          <p className='py-2 underline cursor-pointer'>Checkout Some of my Projects below..</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex flex-wrap items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nihil eveniet incidunt magni debitis minus quasi unde iure pariatur esse cupiditate. Corrupti accusantium aut sequi ut pariatur. Blanditiis quam aspernatur cum molestiae modi! Delectus distinctio aliquam veritatis quidem obcaecati, quia qui rerum accusantium, quam iusto sapiente eos rem quae dicta velit voluptas nisi! Aperiam id, debitis blanditiis obcaecati voluptas repellat facere repellendus. Aliquid fugiat minus, nostrum eaque accusantium sequi? Soluta.</p>
        </div>
      </div>
    </div>
  )
}

export default About