import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container'>
      <h1 className='text-black'>OLÁ</h1>

      <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus repudiandae nobis, magnam, quod officiis obcaecati rem incidunt dicta dolore ducimus! Voluptates quia reiciendis rem quibusdam molestias minima animi facere.</p>
      <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus repudiandae nobis, magnam, quod officiis obcaecati rem incidunt dicta dolore ducimus! Voluptates quia reiciendis rem quibusdam molestias minima animi facere.</p>
      <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus repudiandae nobis, magnam, quod officiis obcaecati rem incidunt dicta dolore ducimus! Voluptates quia reiciendis rem quibusdam molestias minima animi facere.</p>
      <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus repudiandae nobis, magnam, quod officiis obcaecati rem incidunt dicta dolore ducimus! Voluptates quia reiciendis rem quibusdam molestias minima animi facere.</p>
      <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus repudiandae nobis, magnam, quod officiis obcaecati rem incidunt dicta dolore ducimus! Voluptates quia reiciendis rem quibusdam molestias minima animi facere.</p>
    </div>
  )
}
