import { ProductCard } from '../cards/Product';
import { Button } from '../button';
import { useFilterContext } from '../../contexts/filters';
import { ChevronDown } from 'react-feather';
import { useProductsQuery } from '../../query/products-query';
import { IProduct } from '../../interfaces/product';
import { Message } from '../message/message';

export const Products = () => {
  const { data, hasNextPage, isFetchingNextPage, isLoading, fetchNextPage } = useProductsQuery(6);
  const { filters, query } = useFilterContext();

  if (isLoading) {
    return (
      <div>
        <Message message="Ładuję..." />
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <Message message="Brak produktów." />
      </div>
    );
  }

  const searchByCode: IProduct[] = data.pages
    .map((element) =>
      element.items.filter((item: IProduct) => {
        return item.code.toLowerCase().includes(query.toLowerCase());
      })
    )
    .flat();

  const filteredProducts = searchByCode.filter((product) => {
    if (filters.capacity && product.capacity !== filters.capacity) {
      return false;
    }
    if (filters.energyClass && product.energyClass !== filters.energyClass) {
      return false;
    }
    return !(filters.feature && !product.features.includes(filters.feature));
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (filters.sort === 'price') {
      return a.price.value - b.price.value;
    }
    if (filters.sort === 'capacity') {
      return a.capacity - b.capacity;
    }
    return 0;
  });

  if (filteredProducts.length === 0) {
    return (
      <div>
        <Message message="Brak produktów spełniających kryteria wyszukiwania" />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 gap-y-5">
        {sortedProducts.map((product) => (
          <ProductCard key={product.code} {...product} />
        ))}
      </div>

      {hasNextPage && (
        <div className="flex justify-center mt-4">
          <Button
            variant={'tertiary'}
            value={isFetchingNextPage ? 'Ładuję...' : 'Pokaż więcej'}
            icon={<ChevronDown />}
            onClick={() => fetchNextPage()}
          />
        </div>
      )}
    </>
  );
};
