export default function SelectedCarsDiv() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 sm:col-span-3">Selected Cars Div</div>
      <div className="col-span-6 sm:col-span-3">Selected Cars Div</div>
      <div className="hidden sm:col-span-3 sm:block">Selected Cars Div</div>
      <div className="hidden sm:col-span-3 sm:block">Selected Cars Div</div>
    </div>
  );
}
