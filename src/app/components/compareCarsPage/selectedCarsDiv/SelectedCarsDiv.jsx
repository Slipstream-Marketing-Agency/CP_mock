export default function SelectedCarsDiv() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-5 sm:col-span-2">Selected Cars Div</div>
      <div className="col-span-5 sm:col-span-2">Selected Cars Div</div>
      <div className="hidden sm:col-span-2 sm:block">Selected Cars Div</div>
      <div className="hidden sm:col-span-2 sm:block">Selected Cars Div</div>
    </div>
  );
}
