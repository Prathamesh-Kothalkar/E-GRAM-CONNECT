export default function ServiceSection() {
    return (
      <>
        <div className="flex justify-around">
          <ServiceCard title="Service 1" desc="Description of service 1" component={<SomeComponent />} />
          <ServiceCard title="Service 2" desc="Description of service 2" component={<SomeComponent />} />
          <ServiceCard title="Service 3" desc="Description of service 3" component={<SomeComponent />} />
        </div>
      </>
    );
  }
  
  function ServiceCard({ title, desc, component }) {
    return (
      <>
        <div className="m-5 w-48 h-60 shadow-md shadow-slate-500 rounded-lg hover:bg-blue-300 hover:scale-110 transition-all">
          <div className="p-4 m-5 grid grid-cols-1 gap-2">
            <div className="flex justify-center">
              {component}
            </div>
            <div className="text-center">
              <div className="text-black font-bold text-xl">
                {title}
              </div>
              <div className="mt-1 text-sm">
                {desc}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  function SomeComponent() {
    return <div>Icon</div>;
  }
  