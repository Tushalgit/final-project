import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductsByFilters, fetchBrands, fetchCategory, fetchSingleProduct } from './ProductAPI';

const initialState = {
  products: [],
  brands: [],
  category: [],
  status: 'idle',
  totalItems: 0,
  singleProduct: null
};

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilter',
  async ({ filter, sort, pagination }) => {
    const response = await fetchProductsByFilters(filter, sort, pagination);
    return response.data;
  }
);

// export const fetchBrandAsync = createAsyncThunk(
//   'product/fetchBrands',
//   async () => {
//     const response = await fetchBrands();
//     return response.data;
//   }
// );

// export const fetchCategoryAsync = createAsyncThunk(
//   'product/fetchCategory',
//   async () => {
//     const response = await fetchCategory();
//     return response.data;
//   }
// );

export const fetchSingleProductAsync = createAsyncThunk(
  'product/fetchSingleProduct',
  async (id) => {
    const response = await fetchSingleProduct(id);
    return response.data;
  }
);

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })

      // brands
      // .addCase(fetchBrandAsync.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(fetchBrandAsync.fulfilled, (state, action) => {
      //   state.status = 'idle';
      //   state.brands = action.payload;
      // })
      // .addCase(fetchCategoryAsync.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
      //   state.status = 'idle';
      //   state.category = action.payload;
      // })
      .addCase(fetchSingleProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.singleProduct = action.payload;
      })
  },
});

export const { increment, decrement, incrementByAmount } = ProductSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selectBrand = (state) => state.product.brands;
export const selectCategory = (state) => state.product.category;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectSingleProduct = (state) => state.product.singleProduct;

export default ProductSlice.reducer;
