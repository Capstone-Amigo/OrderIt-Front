import './CategoryButtons.css';

interface CategoryButtonsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ selectedCategory, setSelectedCategory, categories }) => {
  return (
    <div className="categoryButtons">
      {categories.map((category) => (
        <div className={`categoryButton ${selectedCategory === category ? 'selected' : ''}`}
             key={category}
             onClick={() => setSelectedCategory(category)}>
          <h1>{category}</h1>
        </div>
      ))}
    </div>
  );
};

export default CategoryButtons;