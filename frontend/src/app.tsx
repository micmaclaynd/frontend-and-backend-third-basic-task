import React from 'react'

import { useAppDispatch, useAppSelector } from '@/store'
import { getProducts } from '@/api/products'

import * as styles from './app.m.scss'

const App: React.FC = () => {
    const products = useAppSelector((state) => state.products)

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        dispatch(getProducts())
    }

    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <span className={styles.title}>Список товаров</span>
                <button onClick={() => getItems()} className={styles.button}>
                    Перезагрузить
                </button>
            </div>
            {products.loading ? (
                <div className={styles.loadingBlock}>
                    <span className={styles.loading}>Загрузка...</span>
                </div>
            ) : (
                <div className={styles.list}>
                    {products.list.map((product, index) => (
                        <div
                            style={{
                                animationDelay: `${index * 0.02}s`
                            }}
                            className={styles.product}
                        >
                            <span className={styles.name}>{product.name}</span>
                            <div className={styles.bottomBlock}>
                                <span className={styles.price}>
                                    {product.price} $
                                </span>
                                <span className={styles.description}>
                                    {product.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default App
