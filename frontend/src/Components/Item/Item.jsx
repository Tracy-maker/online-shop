import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-[280px] hover:scale-105 transition-transform duration-600">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="w-[280px] md:w-[220px] sm:w-[160px]"
        />
      </Link>

      <p className="my-1 text-sm sm:text-xs">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-gray-800 text-lg font-semibold">
          ${props.new_price}
        </div>
        <div className="text-gray-400 text-lg font-medium line-through sm:text-xs">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
