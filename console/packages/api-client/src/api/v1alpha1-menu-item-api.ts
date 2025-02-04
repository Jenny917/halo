/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { MenuItem } from "../models";
// @ts-ignore
import { MenuItemList } from "../models";
/**
 * V1alpha1MenuItemApi - axios parameter creator
 * @export
 */
export const V1alpha1MenuItemApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Create v1alpha1/MenuItem
     * @param {MenuItem} [menuItem] Fresh menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createv1alpha1MenuItem: async (
      menuItem?: MenuItem,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/menuitems`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        menuItem,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete v1alpha1/MenuItem
     * @param {string} name Name of menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletev1alpha1MenuItem: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("deletev1alpha1MenuItem", "name", name);
      const localVarPath = `/api/v1alpha1/menuitems/{name}`.replace(
        `{${"name"}}`,
        encodeURIComponent(String(name))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get v1alpha1/MenuItem
     * @param {string} name Name of menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getv1alpha1MenuItem: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getv1alpha1MenuItem", "name", name);
      const localVarPath = `/api/v1alpha1/menuitems/{name}`.replace(
        `{${"name"}}`,
        encodeURIComponent(String(name))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List v1alpha1/MenuItem
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listv1alpha1MenuItem: async (
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/menuitems`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (fieldSelector) {
        localVarQueryParameter["fieldSelector"] = fieldSelector;
      }

      if (labelSelector) {
        localVarQueryParameter["labelSelector"] = labelSelector;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (size !== undefined) {
        localVarQueryParameter["size"] = size;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update v1alpha1/MenuItem
     * @param {string} name Name of menuitem
     * @param {MenuItem} [menuItem] Updated menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatev1alpha1MenuItem: async (
      name: string,
      menuItem?: MenuItem,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("updatev1alpha1MenuItem", "name", name);
      const localVarPath = `/api/v1alpha1/menuitems/{name}`.replace(
        `{${"name"}}`,
        encodeURIComponent(String(name))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        menuItem,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * V1alpha1MenuItemApi - functional programming interface
 * @export
 */
export const V1alpha1MenuItemApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    V1alpha1MenuItemApiAxiosParamCreator(configuration);
  return {
    /**
     * Create v1alpha1/MenuItem
     * @param {MenuItem} [menuItem] Fresh menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createv1alpha1MenuItem(
      menuItem?: MenuItem,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createv1alpha1MenuItem(
          menuItem,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Delete v1alpha1/MenuItem
     * @param {string} name Name of menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletev1alpha1MenuItem(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deletev1alpha1MenuItem(name, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get v1alpha1/MenuItem
     * @param {string} name Name of menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getv1alpha1MenuItem(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getv1alpha1MenuItem(name, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List v1alpha1/MenuItem
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listv1alpha1MenuItem(
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItemList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listv1alpha1MenuItem(
          fieldSelector,
          labelSelector,
          page,
          size,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update v1alpha1/MenuItem
     * @param {string} name Name of menuitem
     * @param {MenuItem} [menuItem] Updated menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatev1alpha1MenuItem(
      name: string,
      menuItem?: MenuItem,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatev1alpha1MenuItem(
          name,
          menuItem,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * V1alpha1MenuItemApi - factory interface
 * @export
 */
export const V1alpha1MenuItemApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = V1alpha1MenuItemApiFp(configuration);
  return {
    /**
     * Create v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiCreatev1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createv1alpha1MenuItem(
      requestParameters: V1alpha1MenuItemApiCreatev1alpha1MenuItemRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<MenuItem> {
      return localVarFp
        .createv1alpha1MenuItem(requestParameters.menuItem, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiDeletev1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletev1alpha1MenuItem(
      requestParameters: V1alpha1MenuItemApiDeletev1alpha1MenuItemRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .deletev1alpha1MenuItem(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiGetv1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getv1alpha1MenuItem(
      requestParameters: V1alpha1MenuItemApiGetv1alpha1MenuItemRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<MenuItem> {
      return localVarFp
        .getv1alpha1MenuItem(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiListv1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listv1alpha1MenuItem(
      requestParameters: V1alpha1MenuItemApiListv1alpha1MenuItemRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<MenuItemList> {
      return localVarFp
        .listv1alpha1MenuItem(
          requestParameters.fieldSelector,
          requestParameters.labelSelector,
          requestParameters.page,
          requestParameters.size,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiUpdatev1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatev1alpha1MenuItem(
      requestParameters: V1alpha1MenuItemApiUpdatev1alpha1MenuItemRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<MenuItem> {
      return localVarFp
        .updatev1alpha1MenuItem(
          requestParameters.name,
          requestParameters.menuItem,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createv1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiCreatev1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiCreatev1alpha1MenuItemRequest {
  /**
   * Fresh menuitem
   * @type {MenuItem}
   * @memberof V1alpha1MenuItemApiCreatev1alpha1MenuItem
   */
  readonly menuItem?: MenuItem;
}

/**
 * Request parameters for deletev1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiDeletev1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiDeletev1alpha1MenuItemRequest {
  /**
   * Name of menuitem
   * @type {string}
   * @memberof V1alpha1MenuItemApiDeletev1alpha1MenuItem
   */
  readonly name: string;
}

/**
 * Request parameters for getv1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiGetv1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiGetv1alpha1MenuItemRequest {
  /**
   * Name of menuitem
   * @type {string}
   * @memberof V1alpha1MenuItemApiGetv1alpha1MenuItem
   */
  readonly name: string;
}

/**
 * Request parameters for listv1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiListv1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiListv1alpha1MenuItemRequest {
  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof V1alpha1MenuItemApiListv1alpha1MenuItem
   */
  readonly fieldSelector?: Array<string>;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof V1alpha1MenuItemApiListv1alpha1MenuItem
   */
  readonly labelSelector?: Array<string>;

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof V1alpha1MenuItemApiListv1alpha1MenuItem
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof V1alpha1MenuItemApiListv1alpha1MenuItem
   */
  readonly size?: number;
}

/**
 * Request parameters for updatev1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiUpdatev1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiUpdatev1alpha1MenuItemRequest {
  /**
   * Name of menuitem
   * @type {string}
   * @memberof V1alpha1MenuItemApiUpdatev1alpha1MenuItem
   */
  readonly name: string;

  /**
   * Updated menuitem
   * @type {MenuItem}
   * @memberof V1alpha1MenuItemApiUpdatev1alpha1MenuItem
   */
  readonly menuItem?: MenuItem;
}

/**
 * V1alpha1MenuItemApi - object-oriented interface
 * @export
 * @class V1alpha1MenuItemApi
 * @extends {BaseAPI}
 */
export class V1alpha1MenuItemApi extends BaseAPI {
  /**
   * Create v1alpha1/MenuItem
   * @param {V1alpha1MenuItemApiCreatev1alpha1MenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1MenuItemApi
   */
  public createv1alpha1MenuItem(
    requestParameters: V1alpha1MenuItemApiCreatev1alpha1MenuItemRequest = {},
    options?: AxiosRequestConfig
  ) {
    return V1alpha1MenuItemApiFp(this.configuration)
      .createv1alpha1MenuItem(requestParameters.menuItem, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete v1alpha1/MenuItem
   * @param {V1alpha1MenuItemApiDeletev1alpha1MenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1MenuItemApi
   */
  public deletev1alpha1MenuItem(
    requestParameters: V1alpha1MenuItemApiDeletev1alpha1MenuItemRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1MenuItemApiFp(this.configuration)
      .deletev1alpha1MenuItem(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get v1alpha1/MenuItem
   * @param {V1alpha1MenuItemApiGetv1alpha1MenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1MenuItemApi
   */
  public getv1alpha1MenuItem(
    requestParameters: V1alpha1MenuItemApiGetv1alpha1MenuItemRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1MenuItemApiFp(this.configuration)
      .getv1alpha1MenuItem(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List v1alpha1/MenuItem
   * @param {V1alpha1MenuItemApiListv1alpha1MenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1MenuItemApi
   */
  public listv1alpha1MenuItem(
    requestParameters: V1alpha1MenuItemApiListv1alpha1MenuItemRequest = {},
    options?: AxiosRequestConfig
  ) {
    return V1alpha1MenuItemApiFp(this.configuration)
      .listv1alpha1MenuItem(
        requestParameters.fieldSelector,
        requestParameters.labelSelector,
        requestParameters.page,
        requestParameters.size,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update v1alpha1/MenuItem
   * @param {V1alpha1MenuItemApiUpdatev1alpha1MenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1MenuItemApi
   */
  public updatev1alpha1MenuItem(
    requestParameters: V1alpha1MenuItemApiUpdatev1alpha1MenuItemRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1MenuItemApiFp(this.configuration)
      .updatev1alpha1MenuItem(
        requestParameters.name,
        requestParameters.menuItem,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
