import {memo, useCallback, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import ItemDetail from '../../components/item-detail';

function DetailPage() {
  const id = useParams().id;
  
  const store = useStore();

  useEffect(() => {
    store.actions.catalog.loadOne(id);
  }, [id]);

  const select = useSelector(state => ({
    productDetail: state.catalog.productDetail,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),

  }

  return (
    <PageLayout>
      <Head title={ select.productDetail.title } />
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
                  sum={select.sum}/>
      { <ItemDetail item={select.productDetail} onAdd={callbacks.addToBasket} /> }
    </PageLayout>

  );
}

export default memo(DetailPage);
