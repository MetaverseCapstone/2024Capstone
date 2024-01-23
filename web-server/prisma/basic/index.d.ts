
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AssetCategory
 * 
 */
export type AssetCategory = $Result.DefaultSelection<Prisma.$AssetCategoryPayload>
/**
 * Model AssetStyle
 * 
 */
export type AssetStyle = $Result.DefaultSelection<Prisma.$AssetStylePayload>
/**
 * Model AssetStyleToCategory
 * 
 */
export type AssetStyleToCategory = $Result.DefaultSelection<Prisma.$AssetStyleToCategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LoginType: {
  LOCAL: 'LOCAL',
  ADMIN: 'ADMIN'
};

export type LoginType = (typeof LoginType)[keyof typeof LoginType]


export const UserType: {
  GENERAL: 'GENERAL',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type LoginType = $Enums.LoginType

export const LoginType: typeof $Enums.LoginType

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.assetCategory`: Exposes CRUD operations for the **AssetCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetCategories
    * const assetCategories = await prisma.assetCategory.findMany()
    * ```
    */
  get assetCategory(): Prisma.AssetCategoryDelegate<ExtArgs>;

  /**
   * `prisma.assetStyle`: Exposes CRUD operations for the **AssetStyle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetStyles
    * const assetStyles = await prisma.assetStyle.findMany()
    * ```
    */
  get assetStyle(): Prisma.AssetStyleDelegate<ExtArgs>;

  /**
   * `prisma.assetStyleToCategory`: Exposes CRUD operations for the **AssetStyleToCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetStyleToCategories
    * const assetStyleToCategories = await prisma.assetStyleToCategory.findMany()
    * ```
    */
  get assetStyleToCategory(): Prisma.AssetStyleToCategoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AssetCategory: 'AssetCategory',
    AssetStyle: 'AssetStyle',
    AssetStyleToCategory: 'AssetStyleToCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'assetCategory' | 'assetStyle' | 'assetStyleToCategory'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AssetCategory: {
        payload: Prisma.$AssetCategoryPayload<ExtArgs>
        fields: Prisma.AssetCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          findFirst: {
            args: Prisma.AssetCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          findMany: {
            args: Prisma.AssetCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>[]
          }
          create: {
            args: Prisma.AssetCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          createMany: {
            args: Prisma.AssetCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AssetCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          update: {
            args: Prisma.AssetCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          deleteMany: {
            args: Prisma.AssetCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AssetCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AssetCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          aggregate: {
            args: Prisma.AssetCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAssetCategory>
          }
          groupBy: {
            args: Prisma.AssetCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AssetCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<AssetCategoryCountAggregateOutputType> | number
          }
        }
      }
      AssetStyle: {
        payload: Prisma.$AssetStylePayload<ExtArgs>
        fields: Prisma.AssetStyleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetStyleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStylePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetStyleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStylePayload>
          }
          findFirst: {
            args: Prisma.AssetStyleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStylePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetStyleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStylePayload>
          }
          findMany: {
            args: Prisma.AssetStyleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStylePayload>[]
          }
          create: {
            args: Prisma.AssetStyleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStylePayload>
          }
          createMany: {
            args: Prisma.AssetStyleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AssetStyleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStylePayload>
          }
          update: {
            args: Prisma.AssetStyleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStylePayload>
          }
          deleteMany: {
            args: Prisma.AssetStyleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AssetStyleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AssetStyleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStylePayload>
          }
          aggregate: {
            args: Prisma.AssetStyleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAssetStyle>
          }
          groupBy: {
            args: Prisma.AssetStyleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AssetStyleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetStyleCountArgs<ExtArgs>,
            result: $Utils.Optional<AssetStyleCountAggregateOutputType> | number
          }
        }
      }
      AssetStyleToCategory: {
        payload: Prisma.$AssetStyleToCategoryPayload<ExtArgs>
        fields: Prisma.AssetStyleToCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetStyleToCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStyleToCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetStyleToCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStyleToCategoryPayload>
          }
          findFirst: {
            args: Prisma.AssetStyleToCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStyleToCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetStyleToCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStyleToCategoryPayload>
          }
          findMany: {
            args: Prisma.AssetStyleToCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStyleToCategoryPayload>[]
          }
          create: {
            args: Prisma.AssetStyleToCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStyleToCategoryPayload>
          }
          createMany: {
            args: Prisma.AssetStyleToCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AssetStyleToCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStyleToCategoryPayload>
          }
          update: {
            args: Prisma.AssetStyleToCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStyleToCategoryPayload>
          }
          deleteMany: {
            args: Prisma.AssetStyleToCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AssetStyleToCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AssetStyleToCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetStyleToCategoryPayload>
          }
          aggregate: {
            args: Prisma.AssetStyleToCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAssetStyleToCategory>
          }
          groupBy: {
            args: Prisma.AssetStyleToCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AssetStyleToCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetStyleToCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<AssetStyleToCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    AssetCategory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssetCategory?: boolean | UserCountOutputTypeCountAssetCategoryArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssetCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetCategoryWhereInput
  }



  /**
   * Count Type AssetCategoryCountOutputType
   */

  export type AssetCategoryCountOutputType = {
    childCategory: number
    AssetStyleToCategory: number
  }

  export type AssetCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childCategory?: boolean | AssetCategoryCountOutputTypeCountChildCategoryArgs
    AssetStyleToCategory?: boolean | AssetCategoryCountOutputTypeCountAssetStyleToCategoryArgs
  }

  // Custom InputTypes

  /**
   * AssetCategoryCountOutputType without action
   */
  export type AssetCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategoryCountOutputType
     */
    select?: AssetCategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AssetCategoryCountOutputType without action
   */
  export type AssetCategoryCountOutputTypeCountChildCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetCategoryWhereInput
  }


  /**
   * AssetCategoryCountOutputType without action
   */
  export type AssetCategoryCountOutputTypeCountAssetStyleToCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetStyleToCategoryWhereInput
  }



  /**
   * Count Type AssetStyleCountOutputType
   */

  export type AssetStyleCountOutputType = {
    AssetStyleToCategory: number
  }

  export type AssetStyleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssetStyleToCategory?: boolean | AssetStyleCountOutputTypeCountAssetStyleToCategoryArgs
  }

  // Custom InputTypes

  /**
   * AssetStyleCountOutputType without action
   */
  export type AssetStyleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleCountOutputType
     */
    select?: AssetStyleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AssetStyleCountOutputType without action
   */
  export type AssetStyleCountOutputTypeCountAssetStyleToCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetStyleToCategoryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    loginId: string | null
    loginPw: string | null
    username: string | null
    loginType: $Enums.LoginType | null
    userType: $Enums.UserType | null
    nickname: string | null
    isDisable: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    loginId: string | null
    loginPw: string | null
    username: string | null
    loginType: $Enums.LoginType | null
    userType: $Enums.UserType | null
    nickname: string | null
    isDisable: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    loginId: number
    loginPw: number
    username: number
    loginType: number
    userType: number
    nickname: number
    isDisable: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    isDisable?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    isDisable?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    isDisable?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    loginId: string
    loginPw: string | null
    username: string
    loginType: $Enums.LoginType
    userType: $Enums.UserType
    nickname: string
    isDisable: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    loginId?: boolean
    loginPw?: boolean
    username?: boolean
    loginType?: boolean
    userType?: boolean
    nickname?: boolean
    isDisable?: boolean
    AssetCategory?: boolean | User$AssetCategoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    loginId?: boolean
    loginPw?: boolean
    username?: boolean
    loginType?: boolean
    userType?: boolean
    nickname?: boolean
    isDisable?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssetCategory?: boolean | User$AssetCategoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      AssetCategory: Prisma.$AssetCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      loginId: string
      loginPw: string | null
      username: string
      loginType: $Enums.LoginType
      userType: $Enums.UserType
      nickname: string
      isDisable: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    AssetCategory<T extends User$AssetCategoryArgs<ExtArgs> = {}>(args?: Subset<T, User$AssetCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly loginId: FieldRef<"User", 'String'>
    readonly loginPw: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly loginType: FieldRef<"User", 'LoginType'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly isDisable: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.AssetCategory
   */
  export type User$AssetCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    where?: AssetCategoryWhereInput
    orderBy?: AssetCategoryOrderByWithRelationInput | AssetCategoryOrderByWithRelationInput[]
    cursor?: AssetCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetCategoryScalarFieldEnum | AssetCategoryScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model AssetCategory
   */

  export type AggregateAssetCategory = {
    _count: AssetCategoryCountAggregateOutputType | null
    _avg: AssetCategoryAvgAggregateOutputType | null
    _sum: AssetCategorySumAggregateOutputType | null
    _min: AssetCategoryMinAggregateOutputType | null
    _max: AssetCategoryMaxAggregateOutputType | null
  }

  export type AssetCategoryAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
    userId: number | null
  }

  export type AssetCategorySumAggregateOutputType = {
    id: number | null
    parentId: number | null
    userId: number | null
  }

  export type AssetCategoryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    categoryCode: string | null
    categoryName: string | null
    parentId: number | null
    userId: number | null
    isDisable: boolean | null
  }

  export type AssetCategoryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    categoryCode: string | null
    categoryName: string | null
    parentId: number | null
    userId: number | null
    isDisable: boolean | null
  }

  export type AssetCategoryCountAggregateOutputType = {
    id: number
    createdAt: number
    categoryCode: number
    categoryName: number
    parentId: number
    userId: number
    isDisable: number
    _all: number
  }


  export type AssetCategoryAvgAggregateInputType = {
    id?: true
    parentId?: true
    userId?: true
  }

  export type AssetCategorySumAggregateInputType = {
    id?: true
    parentId?: true
    userId?: true
  }

  export type AssetCategoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    categoryCode?: true
    categoryName?: true
    parentId?: true
    userId?: true
    isDisable?: true
  }

  export type AssetCategoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    categoryCode?: true
    categoryName?: true
    parentId?: true
    userId?: true
    isDisable?: true
  }

  export type AssetCategoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    categoryCode?: true
    categoryName?: true
    parentId?: true
    userId?: true
    isDisable?: true
    _all?: true
  }

  export type AssetCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetCategory to aggregate.
     */
    where?: AssetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetCategories to fetch.
     */
    orderBy?: AssetCategoryOrderByWithRelationInput | AssetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetCategories
    **/
    _count?: true | AssetCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetCategoryMaxAggregateInputType
  }

  export type GetAssetCategoryAggregateType<T extends AssetCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetCategory[P]>
      : GetScalarType<T[P], AggregateAssetCategory[P]>
  }




  export type AssetCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetCategoryWhereInput
    orderBy?: AssetCategoryOrderByWithAggregationInput | AssetCategoryOrderByWithAggregationInput[]
    by: AssetCategoryScalarFieldEnum[] | AssetCategoryScalarFieldEnum
    having?: AssetCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCategoryCountAggregateInputType | true
    _avg?: AssetCategoryAvgAggregateInputType
    _sum?: AssetCategorySumAggregateInputType
    _min?: AssetCategoryMinAggregateInputType
    _max?: AssetCategoryMaxAggregateInputType
  }

  export type AssetCategoryGroupByOutputType = {
    id: number
    createdAt: Date
    categoryCode: string
    categoryName: string
    parentId: number | null
    userId: number | null
    isDisable: boolean
    _count: AssetCategoryCountAggregateOutputType | null
    _avg: AssetCategoryAvgAggregateOutputType | null
    _sum: AssetCategorySumAggregateOutputType | null
    _min: AssetCategoryMinAggregateOutputType | null
    _max: AssetCategoryMaxAggregateOutputType | null
  }

  type GetAssetCategoryGroupByPayload<T extends AssetCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], AssetCategoryGroupByOutputType[P]>
        }
      >
    >


  export type AssetCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    categoryCode?: boolean
    categoryName?: boolean
    parentId?: boolean
    userId?: boolean
    isDisable?: boolean
    AssetCategory?: boolean | AssetCategory$AssetCategoryArgs<ExtArgs>
    childCategory?: boolean | AssetCategory$childCategoryArgs<ExtArgs>
    User?: boolean | AssetCategory$UserArgs<ExtArgs>
    AssetStyleToCategory?: boolean | AssetCategory$AssetStyleToCategoryArgs<ExtArgs>
    _count?: boolean | AssetCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetCategory"]>

  export type AssetCategorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    categoryCode?: boolean
    categoryName?: boolean
    parentId?: boolean
    userId?: boolean
    isDisable?: boolean
  }

  export type AssetCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssetCategory?: boolean | AssetCategory$AssetCategoryArgs<ExtArgs>
    childCategory?: boolean | AssetCategory$childCategoryArgs<ExtArgs>
    User?: boolean | AssetCategory$UserArgs<ExtArgs>
    AssetStyleToCategory?: boolean | AssetCategory$AssetStyleToCategoryArgs<ExtArgs>
    _count?: boolean | AssetCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AssetCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetCategory"
    objects: {
      AssetCategory: Prisma.$AssetCategoryPayload<ExtArgs> | null
      childCategory: Prisma.$AssetCategoryPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
      AssetStyleToCategory: Prisma.$AssetStyleToCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      categoryCode: string
      categoryName: string
      parentId: number | null
      userId: number | null
      isDisable: boolean
    }, ExtArgs["result"]["assetCategory"]>
    composites: {}
  }


  type AssetCategoryGetPayload<S extends boolean | null | undefined | AssetCategoryDefaultArgs> = $Result.GetResult<Prisma.$AssetCategoryPayload, S>

  type AssetCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssetCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssetCategoryCountAggregateInputType | true
    }

  export interface AssetCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetCategory'], meta: { name: 'AssetCategory' } }
    /**
     * Find zero or one AssetCategory that matches the filter.
     * @param {AssetCategoryFindUniqueArgs} args - Arguments to find a AssetCategory
     * @example
     * // Get one AssetCategory
     * const assetCategory = await prisma.assetCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssetCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AssetCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AssetCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AssetCategoryFindUniqueOrThrowArgs} args - Arguments to find a AssetCategory
     * @example
     * // Get one AssetCategory
     * const assetCategory = await prisma.assetCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssetCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AssetCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryFindFirstArgs} args - Arguments to find a AssetCategory
     * @example
     * // Get one AssetCategory
     * const assetCategory = await prisma.assetCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssetCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AssetCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryFindFirstOrThrowArgs} args - Arguments to find a AssetCategory
     * @example
     * // Get one AssetCategory
     * const assetCategory = await prisma.assetCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssetCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AssetCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetCategories
     * const assetCategories = await prisma.assetCategory.findMany()
     * 
     * // Get first 10 AssetCategories
     * const assetCategories = await prisma.assetCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetCategoryWithIdOnly = await prisma.assetCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AssetCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AssetCategory.
     * @param {AssetCategoryCreateArgs} args - Arguments to create a AssetCategory.
     * @example
     * // Create one AssetCategory
     * const AssetCategory = await prisma.assetCategory.create({
     *   data: {
     *     // ... data to create a AssetCategory
     *   }
     * })
     * 
    **/
    create<T extends AssetCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AssetCategoryCreateArgs<ExtArgs>>
    ): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AssetCategories.
     *     @param {AssetCategoryCreateManyArgs} args - Arguments to create many AssetCategories.
     *     @example
     *     // Create many AssetCategories
     *     const assetCategory = await prisma.assetCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssetCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssetCategory.
     * @param {AssetCategoryDeleteArgs} args - Arguments to delete one AssetCategory.
     * @example
     * // Delete one AssetCategory
     * const AssetCategory = await prisma.assetCategory.delete({
     *   where: {
     *     // ... filter to delete one AssetCategory
     *   }
     * })
     * 
    **/
    delete<T extends AssetCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AssetCategoryDeleteArgs<ExtArgs>>
    ): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AssetCategory.
     * @param {AssetCategoryUpdateArgs} args - Arguments to update one AssetCategory.
     * @example
     * // Update one AssetCategory
     * const assetCategory = await prisma.assetCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssetCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AssetCategoryUpdateArgs<ExtArgs>>
    ): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AssetCategories.
     * @param {AssetCategoryDeleteManyArgs} args - Arguments to filter AssetCategories to delete.
     * @example
     * // Delete a few AssetCategories
     * const { count } = await prisma.assetCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssetCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetCategories
     * const assetCategory = await prisma.assetCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssetCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AssetCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssetCategory.
     * @param {AssetCategoryUpsertArgs} args - Arguments to update or create a AssetCategory.
     * @example
     * // Update or create a AssetCategory
     * const assetCategory = await prisma.assetCategory.upsert({
     *   create: {
     *     // ... data to create a AssetCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetCategory we want to update
     *   }
     * })
    **/
    upsert<T extends AssetCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AssetCategoryUpsertArgs<ExtArgs>>
    ): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AssetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryCountArgs} args - Arguments to filter AssetCategories to count.
     * @example
     * // Count the number of AssetCategories
     * const count = await prisma.assetCategory.count({
     *   where: {
     *     // ... the filter for the AssetCategories we want to count
     *   }
     * })
    **/
    count<T extends AssetCategoryCountArgs>(
      args?: Subset<T, AssetCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetCategoryAggregateArgs>(args: Subset<T, AssetCategoryAggregateArgs>): Prisma.PrismaPromise<GetAssetCategoryAggregateType<T>>

    /**
     * Group by AssetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetCategoryGroupByArgs['orderBy'] }
        : { orderBy?: AssetCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetCategory model
   */
  readonly fields: AssetCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    AssetCategory<T extends AssetCategory$AssetCategoryArgs<ExtArgs> = {}>(args?: Subset<T, AssetCategory$AssetCategoryArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    childCategory<T extends AssetCategory$childCategoryArgs<ExtArgs> = {}>(args?: Subset<T, AssetCategory$childCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends AssetCategory$UserArgs<ExtArgs> = {}>(args?: Subset<T, AssetCategory$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    AssetStyleToCategory<T extends AssetCategory$AssetStyleToCategoryArgs<ExtArgs> = {}>(args?: Subset<T, AssetCategory$AssetStyleToCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AssetCategory model
   */ 
  interface AssetCategoryFieldRefs {
    readonly id: FieldRef<"AssetCategory", 'Int'>
    readonly createdAt: FieldRef<"AssetCategory", 'DateTime'>
    readonly categoryCode: FieldRef<"AssetCategory", 'String'>
    readonly categoryName: FieldRef<"AssetCategory", 'String'>
    readonly parentId: FieldRef<"AssetCategory", 'Int'>
    readonly userId: FieldRef<"AssetCategory", 'Int'>
    readonly isDisable: FieldRef<"AssetCategory", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * AssetCategory findUnique
   */
  export type AssetCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetCategory to fetch.
     */
    where: AssetCategoryWhereUniqueInput
  }


  /**
   * AssetCategory findUniqueOrThrow
   */
  export type AssetCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetCategory to fetch.
     */
    where: AssetCategoryWhereUniqueInput
  }


  /**
   * AssetCategory findFirst
   */
  export type AssetCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetCategory to fetch.
     */
    where?: AssetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetCategories to fetch.
     */
    orderBy?: AssetCategoryOrderByWithRelationInput | AssetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetCategories.
     */
    cursor?: AssetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetCategories.
     */
    distinct?: AssetCategoryScalarFieldEnum | AssetCategoryScalarFieldEnum[]
  }


  /**
   * AssetCategory findFirstOrThrow
   */
  export type AssetCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetCategory to fetch.
     */
    where?: AssetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetCategories to fetch.
     */
    orderBy?: AssetCategoryOrderByWithRelationInput | AssetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetCategories.
     */
    cursor?: AssetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetCategories.
     */
    distinct?: AssetCategoryScalarFieldEnum | AssetCategoryScalarFieldEnum[]
  }


  /**
   * AssetCategory findMany
   */
  export type AssetCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetCategories to fetch.
     */
    where?: AssetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetCategories to fetch.
     */
    orderBy?: AssetCategoryOrderByWithRelationInput | AssetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetCategories.
     */
    cursor?: AssetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetCategories.
     */
    skip?: number
    distinct?: AssetCategoryScalarFieldEnum | AssetCategoryScalarFieldEnum[]
  }


  /**
   * AssetCategory create
   */
  export type AssetCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetCategory.
     */
    data: XOR<AssetCategoryCreateInput, AssetCategoryUncheckedCreateInput>
  }


  /**
   * AssetCategory createMany
   */
  export type AssetCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetCategories.
     */
    data: AssetCategoryCreateManyInput | AssetCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AssetCategory update
   */
  export type AssetCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetCategory.
     */
    data: XOR<AssetCategoryUpdateInput, AssetCategoryUncheckedUpdateInput>
    /**
     * Choose, which AssetCategory to update.
     */
    where: AssetCategoryWhereUniqueInput
  }


  /**
   * AssetCategory updateMany
   */
  export type AssetCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetCategories.
     */
    data: XOR<AssetCategoryUpdateManyMutationInput, AssetCategoryUncheckedUpdateManyInput>
    /**
     * Filter which AssetCategories to update
     */
    where?: AssetCategoryWhereInput
  }


  /**
   * AssetCategory upsert
   */
  export type AssetCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetCategory to update in case it exists.
     */
    where: AssetCategoryWhereUniqueInput
    /**
     * In case the AssetCategory found by the `where` argument doesn't exist, create a new AssetCategory with this data.
     */
    create: XOR<AssetCategoryCreateInput, AssetCategoryUncheckedCreateInput>
    /**
     * In case the AssetCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetCategoryUpdateInput, AssetCategoryUncheckedUpdateInput>
  }


  /**
   * AssetCategory delete
   */
  export type AssetCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter which AssetCategory to delete.
     */
    where: AssetCategoryWhereUniqueInput
  }


  /**
   * AssetCategory deleteMany
   */
  export type AssetCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetCategories to delete
     */
    where?: AssetCategoryWhereInput
  }


  /**
   * AssetCategory.AssetCategory
   */
  export type AssetCategory$AssetCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    where?: AssetCategoryWhereInput
  }


  /**
   * AssetCategory.childCategory
   */
  export type AssetCategory$childCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    where?: AssetCategoryWhereInput
    orderBy?: AssetCategoryOrderByWithRelationInput | AssetCategoryOrderByWithRelationInput[]
    cursor?: AssetCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetCategoryScalarFieldEnum | AssetCategoryScalarFieldEnum[]
  }


  /**
   * AssetCategory.User
   */
  export type AssetCategory$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * AssetCategory.AssetStyleToCategory
   */
  export type AssetCategory$AssetStyleToCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    where?: AssetStyleToCategoryWhereInput
    orderBy?: AssetStyleToCategoryOrderByWithRelationInput | AssetStyleToCategoryOrderByWithRelationInput[]
    cursor?: AssetStyleToCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetStyleToCategoryScalarFieldEnum | AssetStyleToCategoryScalarFieldEnum[]
  }


  /**
   * AssetCategory without action
   */
  export type AssetCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetCategoryInclude<ExtArgs> | null
  }



  /**
   * Model AssetStyle
   */

  export type AggregateAssetStyle = {
    _count: AssetStyleCountAggregateOutputType | null
    _avg: AssetStyleAvgAggregateOutputType | null
    _sum: AssetStyleSumAggregateOutputType | null
    _min: AssetStyleMinAggregateOutputType | null
    _max: AssetStyleMaxAggregateOutputType | null
  }

  export type AssetStyleAvgAggregateOutputType = {
    id: number | null
  }

  export type AssetStyleSumAggregateOutputType = {
    id: number | null
  }

  export type AssetStyleMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    styleCode: string | null
    styleName: string | null
    isDisable: boolean | null
  }

  export type AssetStyleMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    styleCode: string | null
    styleName: string | null
    isDisable: boolean | null
  }

  export type AssetStyleCountAggregateOutputType = {
    id: number
    createdAt: number
    styleCode: number
    styleName: number
    isDisable: number
    _all: number
  }


  export type AssetStyleAvgAggregateInputType = {
    id?: true
  }

  export type AssetStyleSumAggregateInputType = {
    id?: true
  }

  export type AssetStyleMinAggregateInputType = {
    id?: true
    createdAt?: true
    styleCode?: true
    styleName?: true
    isDisable?: true
  }

  export type AssetStyleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    styleCode?: true
    styleName?: true
    isDisable?: true
  }

  export type AssetStyleCountAggregateInputType = {
    id?: true
    createdAt?: true
    styleCode?: true
    styleName?: true
    isDisable?: true
    _all?: true
  }

  export type AssetStyleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetStyle to aggregate.
     */
    where?: AssetStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetStyles to fetch.
     */
    orderBy?: AssetStyleOrderByWithRelationInput | AssetStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetStyles
    **/
    _count?: true | AssetStyleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetStyleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetStyleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetStyleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetStyleMaxAggregateInputType
  }

  export type GetAssetStyleAggregateType<T extends AssetStyleAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetStyle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetStyle[P]>
      : GetScalarType<T[P], AggregateAssetStyle[P]>
  }




  export type AssetStyleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetStyleWhereInput
    orderBy?: AssetStyleOrderByWithAggregationInput | AssetStyleOrderByWithAggregationInput[]
    by: AssetStyleScalarFieldEnum[] | AssetStyleScalarFieldEnum
    having?: AssetStyleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetStyleCountAggregateInputType | true
    _avg?: AssetStyleAvgAggregateInputType
    _sum?: AssetStyleSumAggregateInputType
    _min?: AssetStyleMinAggregateInputType
    _max?: AssetStyleMaxAggregateInputType
  }

  export type AssetStyleGroupByOutputType = {
    id: number
    createdAt: Date
    styleCode: string
    styleName: string
    isDisable: boolean
    _count: AssetStyleCountAggregateOutputType | null
    _avg: AssetStyleAvgAggregateOutputType | null
    _sum: AssetStyleSumAggregateOutputType | null
    _min: AssetStyleMinAggregateOutputType | null
    _max: AssetStyleMaxAggregateOutputType | null
  }

  type GetAssetStyleGroupByPayload<T extends AssetStyleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetStyleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetStyleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetStyleGroupByOutputType[P]>
            : GetScalarType<T[P], AssetStyleGroupByOutputType[P]>
        }
      >
    >


  export type AssetStyleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    styleCode?: boolean
    styleName?: boolean
    isDisable?: boolean
    AssetStyleToCategory?: boolean | AssetStyle$AssetStyleToCategoryArgs<ExtArgs>
    _count?: boolean | AssetStyleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetStyle"]>

  export type AssetStyleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    styleCode?: boolean
    styleName?: boolean
    isDisable?: boolean
  }

  export type AssetStyleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssetStyleToCategory?: boolean | AssetStyle$AssetStyleToCategoryArgs<ExtArgs>
    _count?: boolean | AssetStyleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AssetStylePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetStyle"
    objects: {
      AssetStyleToCategory: Prisma.$AssetStyleToCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      styleCode: string
      styleName: string
      isDisable: boolean
    }, ExtArgs["result"]["assetStyle"]>
    composites: {}
  }


  type AssetStyleGetPayload<S extends boolean | null | undefined | AssetStyleDefaultArgs> = $Result.GetResult<Prisma.$AssetStylePayload, S>

  type AssetStyleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssetStyleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssetStyleCountAggregateInputType | true
    }

  export interface AssetStyleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetStyle'], meta: { name: 'AssetStyle' } }
    /**
     * Find zero or one AssetStyle that matches the filter.
     * @param {AssetStyleFindUniqueArgs} args - Arguments to find a AssetStyle
     * @example
     * // Get one AssetStyle
     * const assetStyle = await prisma.assetStyle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssetStyleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleFindUniqueArgs<ExtArgs>>
    ): Prisma__AssetStyleClient<$Result.GetResult<Prisma.$AssetStylePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AssetStyle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AssetStyleFindUniqueOrThrowArgs} args - Arguments to find a AssetStyle
     * @example
     * // Get one AssetStyle
     * const assetStyle = await prisma.assetStyle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssetStyleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AssetStyleClient<$Result.GetResult<Prisma.$AssetStylePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AssetStyle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleFindFirstArgs} args - Arguments to find a AssetStyle
     * @example
     * // Get one AssetStyle
     * const assetStyle = await prisma.assetStyle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssetStyleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleFindFirstArgs<ExtArgs>>
    ): Prisma__AssetStyleClient<$Result.GetResult<Prisma.$AssetStylePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AssetStyle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleFindFirstOrThrowArgs} args - Arguments to find a AssetStyle
     * @example
     * // Get one AssetStyle
     * const assetStyle = await prisma.assetStyle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssetStyleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AssetStyleClient<$Result.GetResult<Prisma.$AssetStylePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AssetStyles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetStyles
     * const assetStyles = await prisma.assetStyle.findMany()
     * 
     * // Get first 10 AssetStyles
     * const assetStyles = await prisma.assetStyle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetStyleWithIdOnly = await prisma.assetStyle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AssetStyleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetStylePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AssetStyle.
     * @param {AssetStyleCreateArgs} args - Arguments to create a AssetStyle.
     * @example
     * // Create one AssetStyle
     * const AssetStyle = await prisma.assetStyle.create({
     *   data: {
     *     // ... data to create a AssetStyle
     *   }
     * })
     * 
    **/
    create<T extends AssetStyleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleCreateArgs<ExtArgs>>
    ): Prisma__AssetStyleClient<$Result.GetResult<Prisma.$AssetStylePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AssetStyles.
     *     @param {AssetStyleCreateManyArgs} args - Arguments to create many AssetStyles.
     *     @example
     *     // Create many AssetStyles
     *     const assetStyle = await prisma.assetStyle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssetStyleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssetStyle.
     * @param {AssetStyleDeleteArgs} args - Arguments to delete one AssetStyle.
     * @example
     * // Delete one AssetStyle
     * const AssetStyle = await prisma.assetStyle.delete({
     *   where: {
     *     // ... filter to delete one AssetStyle
     *   }
     * })
     * 
    **/
    delete<T extends AssetStyleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleDeleteArgs<ExtArgs>>
    ): Prisma__AssetStyleClient<$Result.GetResult<Prisma.$AssetStylePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AssetStyle.
     * @param {AssetStyleUpdateArgs} args - Arguments to update one AssetStyle.
     * @example
     * // Update one AssetStyle
     * const assetStyle = await prisma.assetStyle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssetStyleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleUpdateArgs<ExtArgs>>
    ): Prisma__AssetStyleClient<$Result.GetResult<Prisma.$AssetStylePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AssetStyles.
     * @param {AssetStyleDeleteManyArgs} args - Arguments to filter AssetStyles to delete.
     * @example
     * // Delete a few AssetStyles
     * const { count } = await prisma.assetStyle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssetStyleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetStyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetStyles
     * const assetStyle = await prisma.assetStyle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssetStyleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssetStyle.
     * @param {AssetStyleUpsertArgs} args - Arguments to update or create a AssetStyle.
     * @example
     * // Update or create a AssetStyle
     * const assetStyle = await prisma.assetStyle.upsert({
     *   create: {
     *     // ... data to create a AssetStyle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetStyle we want to update
     *   }
     * })
    **/
    upsert<T extends AssetStyleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleUpsertArgs<ExtArgs>>
    ): Prisma__AssetStyleClient<$Result.GetResult<Prisma.$AssetStylePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AssetStyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleCountArgs} args - Arguments to filter AssetStyles to count.
     * @example
     * // Count the number of AssetStyles
     * const count = await prisma.assetStyle.count({
     *   where: {
     *     // ... the filter for the AssetStyles we want to count
     *   }
     * })
    **/
    count<T extends AssetStyleCountArgs>(
      args?: Subset<T, AssetStyleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetStyleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetStyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetStyleAggregateArgs>(args: Subset<T, AssetStyleAggregateArgs>): Prisma.PrismaPromise<GetAssetStyleAggregateType<T>>

    /**
     * Group by AssetStyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetStyleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetStyleGroupByArgs['orderBy'] }
        : { orderBy?: AssetStyleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetStyleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetStyleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetStyle model
   */
  readonly fields: AssetStyleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetStyle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetStyleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    AssetStyleToCategory<T extends AssetStyle$AssetStyleToCategoryArgs<ExtArgs> = {}>(args?: Subset<T, AssetStyle$AssetStyleToCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AssetStyle model
   */ 
  interface AssetStyleFieldRefs {
    readonly id: FieldRef<"AssetStyle", 'Int'>
    readonly createdAt: FieldRef<"AssetStyle", 'DateTime'>
    readonly styleCode: FieldRef<"AssetStyle", 'String'>
    readonly styleName: FieldRef<"AssetStyle", 'String'>
    readonly isDisable: FieldRef<"AssetStyle", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * AssetStyle findUnique
   */
  export type AssetStyleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyle
     */
    select?: AssetStyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleInclude<ExtArgs> | null
    /**
     * Filter, which AssetStyle to fetch.
     */
    where: AssetStyleWhereUniqueInput
  }


  /**
   * AssetStyle findUniqueOrThrow
   */
  export type AssetStyleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyle
     */
    select?: AssetStyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleInclude<ExtArgs> | null
    /**
     * Filter, which AssetStyle to fetch.
     */
    where: AssetStyleWhereUniqueInput
  }


  /**
   * AssetStyle findFirst
   */
  export type AssetStyleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyle
     */
    select?: AssetStyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleInclude<ExtArgs> | null
    /**
     * Filter, which AssetStyle to fetch.
     */
    where?: AssetStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetStyles to fetch.
     */
    orderBy?: AssetStyleOrderByWithRelationInput | AssetStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetStyles.
     */
    cursor?: AssetStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetStyles.
     */
    distinct?: AssetStyleScalarFieldEnum | AssetStyleScalarFieldEnum[]
  }


  /**
   * AssetStyle findFirstOrThrow
   */
  export type AssetStyleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyle
     */
    select?: AssetStyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleInclude<ExtArgs> | null
    /**
     * Filter, which AssetStyle to fetch.
     */
    where?: AssetStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetStyles to fetch.
     */
    orderBy?: AssetStyleOrderByWithRelationInput | AssetStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetStyles.
     */
    cursor?: AssetStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetStyles.
     */
    distinct?: AssetStyleScalarFieldEnum | AssetStyleScalarFieldEnum[]
  }


  /**
   * AssetStyle findMany
   */
  export type AssetStyleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyle
     */
    select?: AssetStyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleInclude<ExtArgs> | null
    /**
     * Filter, which AssetStyles to fetch.
     */
    where?: AssetStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetStyles to fetch.
     */
    orderBy?: AssetStyleOrderByWithRelationInput | AssetStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetStyles.
     */
    cursor?: AssetStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetStyles.
     */
    skip?: number
    distinct?: AssetStyleScalarFieldEnum | AssetStyleScalarFieldEnum[]
  }


  /**
   * AssetStyle create
   */
  export type AssetStyleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyle
     */
    select?: AssetStyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetStyle.
     */
    data: XOR<AssetStyleCreateInput, AssetStyleUncheckedCreateInput>
  }


  /**
   * AssetStyle createMany
   */
  export type AssetStyleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetStyles.
     */
    data: AssetStyleCreateManyInput | AssetStyleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AssetStyle update
   */
  export type AssetStyleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyle
     */
    select?: AssetStyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetStyle.
     */
    data: XOR<AssetStyleUpdateInput, AssetStyleUncheckedUpdateInput>
    /**
     * Choose, which AssetStyle to update.
     */
    where: AssetStyleWhereUniqueInput
  }


  /**
   * AssetStyle updateMany
   */
  export type AssetStyleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetStyles.
     */
    data: XOR<AssetStyleUpdateManyMutationInput, AssetStyleUncheckedUpdateManyInput>
    /**
     * Filter which AssetStyles to update
     */
    where?: AssetStyleWhereInput
  }


  /**
   * AssetStyle upsert
   */
  export type AssetStyleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyle
     */
    select?: AssetStyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetStyle to update in case it exists.
     */
    where: AssetStyleWhereUniqueInput
    /**
     * In case the AssetStyle found by the `where` argument doesn't exist, create a new AssetStyle with this data.
     */
    create: XOR<AssetStyleCreateInput, AssetStyleUncheckedCreateInput>
    /**
     * In case the AssetStyle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetStyleUpdateInput, AssetStyleUncheckedUpdateInput>
  }


  /**
   * AssetStyle delete
   */
  export type AssetStyleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyle
     */
    select?: AssetStyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleInclude<ExtArgs> | null
    /**
     * Filter which AssetStyle to delete.
     */
    where: AssetStyleWhereUniqueInput
  }


  /**
   * AssetStyle deleteMany
   */
  export type AssetStyleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetStyles to delete
     */
    where?: AssetStyleWhereInput
  }


  /**
   * AssetStyle.AssetStyleToCategory
   */
  export type AssetStyle$AssetStyleToCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    where?: AssetStyleToCategoryWhereInput
    orderBy?: AssetStyleToCategoryOrderByWithRelationInput | AssetStyleToCategoryOrderByWithRelationInput[]
    cursor?: AssetStyleToCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetStyleToCategoryScalarFieldEnum | AssetStyleToCategoryScalarFieldEnum[]
  }


  /**
   * AssetStyle without action
   */
  export type AssetStyleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyle
     */
    select?: AssetStyleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleInclude<ExtArgs> | null
  }



  /**
   * Model AssetStyleToCategory
   */

  export type AggregateAssetStyleToCategory = {
    _count: AssetStyleToCategoryCountAggregateOutputType | null
    _avg: AssetStyleToCategoryAvgAggregateOutputType | null
    _sum: AssetStyleToCategorySumAggregateOutputType | null
    _min: AssetStyleToCategoryMinAggregateOutputType | null
    _max: AssetStyleToCategoryMaxAggregateOutputType | null
  }

  export type AssetStyleToCategoryAvgAggregateOutputType = {
    categoryId: number | null
    styleId: number | null
  }

  export type AssetStyleToCategorySumAggregateOutputType = {
    categoryId: number | null
    styleId: number | null
  }

  export type AssetStyleToCategoryMinAggregateOutputType = {
    categoryId: number | null
    styleId: number | null
    createdAt: Date | null
  }

  export type AssetStyleToCategoryMaxAggregateOutputType = {
    categoryId: number | null
    styleId: number | null
    createdAt: Date | null
  }

  export type AssetStyleToCategoryCountAggregateOutputType = {
    categoryId: number
    styleId: number
    createdAt: number
    _all: number
  }


  export type AssetStyleToCategoryAvgAggregateInputType = {
    categoryId?: true
    styleId?: true
  }

  export type AssetStyleToCategorySumAggregateInputType = {
    categoryId?: true
    styleId?: true
  }

  export type AssetStyleToCategoryMinAggregateInputType = {
    categoryId?: true
    styleId?: true
    createdAt?: true
  }

  export type AssetStyleToCategoryMaxAggregateInputType = {
    categoryId?: true
    styleId?: true
    createdAt?: true
  }

  export type AssetStyleToCategoryCountAggregateInputType = {
    categoryId?: true
    styleId?: true
    createdAt?: true
    _all?: true
  }

  export type AssetStyleToCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetStyleToCategory to aggregate.
     */
    where?: AssetStyleToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetStyleToCategories to fetch.
     */
    orderBy?: AssetStyleToCategoryOrderByWithRelationInput | AssetStyleToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetStyleToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetStyleToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetStyleToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetStyleToCategories
    **/
    _count?: true | AssetStyleToCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetStyleToCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetStyleToCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetStyleToCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetStyleToCategoryMaxAggregateInputType
  }

  export type GetAssetStyleToCategoryAggregateType<T extends AssetStyleToCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetStyleToCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetStyleToCategory[P]>
      : GetScalarType<T[P], AggregateAssetStyleToCategory[P]>
  }




  export type AssetStyleToCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetStyleToCategoryWhereInput
    orderBy?: AssetStyleToCategoryOrderByWithAggregationInput | AssetStyleToCategoryOrderByWithAggregationInput[]
    by: AssetStyleToCategoryScalarFieldEnum[] | AssetStyleToCategoryScalarFieldEnum
    having?: AssetStyleToCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetStyleToCategoryCountAggregateInputType | true
    _avg?: AssetStyleToCategoryAvgAggregateInputType
    _sum?: AssetStyleToCategorySumAggregateInputType
    _min?: AssetStyleToCategoryMinAggregateInputType
    _max?: AssetStyleToCategoryMaxAggregateInputType
  }

  export type AssetStyleToCategoryGroupByOutputType = {
    categoryId: number
    styleId: number
    createdAt: Date
    _count: AssetStyleToCategoryCountAggregateOutputType | null
    _avg: AssetStyleToCategoryAvgAggregateOutputType | null
    _sum: AssetStyleToCategorySumAggregateOutputType | null
    _min: AssetStyleToCategoryMinAggregateOutputType | null
    _max: AssetStyleToCategoryMaxAggregateOutputType | null
  }

  type GetAssetStyleToCategoryGroupByPayload<T extends AssetStyleToCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetStyleToCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetStyleToCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetStyleToCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], AssetStyleToCategoryGroupByOutputType[P]>
        }
      >
    >


  export type AssetStyleToCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    styleId?: boolean
    createdAt?: boolean
    AssetCategory?: boolean | AssetCategoryDefaultArgs<ExtArgs>
    AssetStyle?: boolean | AssetStyleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetStyleToCategory"]>

  export type AssetStyleToCategorySelectScalar = {
    categoryId?: boolean
    styleId?: boolean
    createdAt?: boolean
  }

  export type AssetStyleToCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssetCategory?: boolean | AssetCategoryDefaultArgs<ExtArgs>
    AssetStyle?: boolean | AssetStyleDefaultArgs<ExtArgs>
  }


  export type $AssetStyleToCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetStyleToCategory"
    objects: {
      AssetCategory: Prisma.$AssetCategoryPayload<ExtArgs>
      AssetStyle: Prisma.$AssetStylePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      categoryId: number
      styleId: number
      createdAt: Date
    }, ExtArgs["result"]["assetStyleToCategory"]>
    composites: {}
  }


  type AssetStyleToCategoryGetPayload<S extends boolean | null | undefined | AssetStyleToCategoryDefaultArgs> = $Result.GetResult<Prisma.$AssetStyleToCategoryPayload, S>

  type AssetStyleToCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssetStyleToCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssetStyleToCategoryCountAggregateInputType | true
    }

  export interface AssetStyleToCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetStyleToCategory'], meta: { name: 'AssetStyleToCategory' } }
    /**
     * Find zero or one AssetStyleToCategory that matches the filter.
     * @param {AssetStyleToCategoryFindUniqueArgs} args - Arguments to find a AssetStyleToCategory
     * @example
     * // Get one AssetStyleToCategory
     * const assetStyleToCategory = await prisma.assetStyleToCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssetStyleToCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleToCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__AssetStyleToCategoryClient<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AssetStyleToCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AssetStyleToCategoryFindUniqueOrThrowArgs} args - Arguments to find a AssetStyleToCategory
     * @example
     * // Get one AssetStyleToCategory
     * const assetStyleToCategory = await prisma.assetStyleToCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssetStyleToCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleToCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AssetStyleToCategoryClient<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AssetStyleToCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleToCategoryFindFirstArgs} args - Arguments to find a AssetStyleToCategory
     * @example
     * // Get one AssetStyleToCategory
     * const assetStyleToCategory = await prisma.assetStyleToCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssetStyleToCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleToCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__AssetStyleToCategoryClient<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AssetStyleToCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleToCategoryFindFirstOrThrowArgs} args - Arguments to find a AssetStyleToCategory
     * @example
     * // Get one AssetStyleToCategory
     * const assetStyleToCategory = await prisma.assetStyleToCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssetStyleToCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleToCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AssetStyleToCategoryClient<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AssetStyleToCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleToCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetStyleToCategories
     * const assetStyleToCategories = await prisma.assetStyleToCategory.findMany()
     * 
     * // Get first 10 AssetStyleToCategories
     * const assetStyleToCategories = await prisma.assetStyleToCategory.findMany({ take: 10 })
     * 
     * // Only select the `categoryId`
     * const assetStyleToCategoryWithCategoryIdOnly = await prisma.assetStyleToCategory.findMany({ select: { categoryId: true } })
     * 
    **/
    findMany<T extends AssetStyleToCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleToCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AssetStyleToCategory.
     * @param {AssetStyleToCategoryCreateArgs} args - Arguments to create a AssetStyleToCategory.
     * @example
     * // Create one AssetStyleToCategory
     * const AssetStyleToCategory = await prisma.assetStyleToCategory.create({
     *   data: {
     *     // ... data to create a AssetStyleToCategory
     *   }
     * })
     * 
    **/
    create<T extends AssetStyleToCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleToCategoryCreateArgs<ExtArgs>>
    ): Prisma__AssetStyleToCategoryClient<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AssetStyleToCategories.
     *     @param {AssetStyleToCategoryCreateManyArgs} args - Arguments to create many AssetStyleToCategories.
     *     @example
     *     // Create many AssetStyleToCategories
     *     const assetStyleToCategory = await prisma.assetStyleToCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssetStyleToCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleToCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssetStyleToCategory.
     * @param {AssetStyleToCategoryDeleteArgs} args - Arguments to delete one AssetStyleToCategory.
     * @example
     * // Delete one AssetStyleToCategory
     * const AssetStyleToCategory = await prisma.assetStyleToCategory.delete({
     *   where: {
     *     // ... filter to delete one AssetStyleToCategory
     *   }
     * })
     * 
    **/
    delete<T extends AssetStyleToCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleToCategoryDeleteArgs<ExtArgs>>
    ): Prisma__AssetStyleToCategoryClient<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AssetStyleToCategory.
     * @param {AssetStyleToCategoryUpdateArgs} args - Arguments to update one AssetStyleToCategory.
     * @example
     * // Update one AssetStyleToCategory
     * const assetStyleToCategory = await prisma.assetStyleToCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssetStyleToCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleToCategoryUpdateArgs<ExtArgs>>
    ): Prisma__AssetStyleToCategoryClient<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AssetStyleToCategories.
     * @param {AssetStyleToCategoryDeleteManyArgs} args - Arguments to filter AssetStyleToCategories to delete.
     * @example
     * // Delete a few AssetStyleToCategories
     * const { count } = await prisma.assetStyleToCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssetStyleToCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetStyleToCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetStyleToCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleToCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetStyleToCategories
     * const assetStyleToCategory = await prisma.assetStyleToCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssetStyleToCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleToCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssetStyleToCategory.
     * @param {AssetStyleToCategoryUpsertArgs} args - Arguments to update or create a AssetStyleToCategory.
     * @example
     * // Update or create a AssetStyleToCategory
     * const assetStyleToCategory = await prisma.assetStyleToCategory.upsert({
     *   create: {
     *     // ... data to create a AssetStyleToCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetStyleToCategory we want to update
     *   }
     * })
    **/
    upsert<T extends AssetStyleToCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AssetStyleToCategoryUpsertArgs<ExtArgs>>
    ): Prisma__AssetStyleToCategoryClient<$Result.GetResult<Prisma.$AssetStyleToCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AssetStyleToCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleToCategoryCountArgs} args - Arguments to filter AssetStyleToCategories to count.
     * @example
     * // Count the number of AssetStyleToCategories
     * const count = await prisma.assetStyleToCategory.count({
     *   where: {
     *     // ... the filter for the AssetStyleToCategories we want to count
     *   }
     * })
    **/
    count<T extends AssetStyleToCategoryCountArgs>(
      args?: Subset<T, AssetStyleToCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetStyleToCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetStyleToCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleToCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetStyleToCategoryAggregateArgs>(args: Subset<T, AssetStyleToCategoryAggregateArgs>): Prisma.PrismaPromise<GetAssetStyleToCategoryAggregateType<T>>

    /**
     * Group by AssetStyleToCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetStyleToCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetStyleToCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetStyleToCategoryGroupByArgs['orderBy'] }
        : { orderBy?: AssetStyleToCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetStyleToCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetStyleToCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetStyleToCategory model
   */
  readonly fields: AssetStyleToCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetStyleToCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetStyleToCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    AssetCategory<T extends AssetCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetCategoryDefaultArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    AssetStyle<T extends AssetStyleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetStyleDefaultArgs<ExtArgs>>): Prisma__AssetStyleClient<$Result.GetResult<Prisma.$AssetStylePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AssetStyleToCategory model
   */ 
  interface AssetStyleToCategoryFieldRefs {
    readonly categoryId: FieldRef<"AssetStyleToCategory", 'Int'>
    readonly styleId: FieldRef<"AssetStyleToCategory", 'Int'>
    readonly createdAt: FieldRef<"AssetStyleToCategory", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * AssetStyleToCategory findUnique
   */
  export type AssetStyleToCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetStyleToCategory to fetch.
     */
    where: AssetStyleToCategoryWhereUniqueInput
  }


  /**
   * AssetStyleToCategory findUniqueOrThrow
   */
  export type AssetStyleToCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetStyleToCategory to fetch.
     */
    where: AssetStyleToCategoryWhereUniqueInput
  }


  /**
   * AssetStyleToCategory findFirst
   */
  export type AssetStyleToCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetStyleToCategory to fetch.
     */
    where?: AssetStyleToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetStyleToCategories to fetch.
     */
    orderBy?: AssetStyleToCategoryOrderByWithRelationInput | AssetStyleToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetStyleToCategories.
     */
    cursor?: AssetStyleToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetStyleToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetStyleToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetStyleToCategories.
     */
    distinct?: AssetStyleToCategoryScalarFieldEnum | AssetStyleToCategoryScalarFieldEnum[]
  }


  /**
   * AssetStyleToCategory findFirstOrThrow
   */
  export type AssetStyleToCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetStyleToCategory to fetch.
     */
    where?: AssetStyleToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetStyleToCategories to fetch.
     */
    orderBy?: AssetStyleToCategoryOrderByWithRelationInput | AssetStyleToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetStyleToCategories.
     */
    cursor?: AssetStyleToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetStyleToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetStyleToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetStyleToCategories.
     */
    distinct?: AssetStyleToCategoryScalarFieldEnum | AssetStyleToCategoryScalarFieldEnum[]
  }


  /**
   * AssetStyleToCategory findMany
   */
  export type AssetStyleToCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetStyleToCategories to fetch.
     */
    where?: AssetStyleToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetStyleToCategories to fetch.
     */
    orderBy?: AssetStyleToCategoryOrderByWithRelationInput | AssetStyleToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetStyleToCategories.
     */
    cursor?: AssetStyleToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetStyleToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetStyleToCategories.
     */
    skip?: number
    distinct?: AssetStyleToCategoryScalarFieldEnum | AssetStyleToCategoryScalarFieldEnum[]
  }


  /**
   * AssetStyleToCategory create
   */
  export type AssetStyleToCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetStyleToCategory.
     */
    data: XOR<AssetStyleToCategoryCreateInput, AssetStyleToCategoryUncheckedCreateInput>
  }


  /**
   * AssetStyleToCategory createMany
   */
  export type AssetStyleToCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetStyleToCategories.
     */
    data: AssetStyleToCategoryCreateManyInput | AssetStyleToCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AssetStyleToCategory update
   */
  export type AssetStyleToCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetStyleToCategory.
     */
    data: XOR<AssetStyleToCategoryUpdateInput, AssetStyleToCategoryUncheckedUpdateInput>
    /**
     * Choose, which AssetStyleToCategory to update.
     */
    where: AssetStyleToCategoryWhereUniqueInput
  }


  /**
   * AssetStyleToCategory updateMany
   */
  export type AssetStyleToCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetStyleToCategories.
     */
    data: XOR<AssetStyleToCategoryUpdateManyMutationInput, AssetStyleToCategoryUncheckedUpdateManyInput>
    /**
     * Filter which AssetStyleToCategories to update
     */
    where?: AssetStyleToCategoryWhereInput
  }


  /**
   * AssetStyleToCategory upsert
   */
  export type AssetStyleToCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetStyleToCategory to update in case it exists.
     */
    where: AssetStyleToCategoryWhereUniqueInput
    /**
     * In case the AssetStyleToCategory found by the `where` argument doesn't exist, create a new AssetStyleToCategory with this data.
     */
    create: XOR<AssetStyleToCategoryCreateInput, AssetStyleToCategoryUncheckedCreateInput>
    /**
     * In case the AssetStyleToCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetStyleToCategoryUpdateInput, AssetStyleToCategoryUncheckedUpdateInput>
  }


  /**
   * AssetStyleToCategory delete
   */
  export type AssetStyleToCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
    /**
     * Filter which AssetStyleToCategory to delete.
     */
    where: AssetStyleToCategoryWhereUniqueInput
  }


  /**
   * AssetStyleToCategory deleteMany
   */
  export type AssetStyleToCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetStyleToCategories to delete
     */
    where?: AssetStyleToCategoryWhereInput
  }


  /**
   * AssetStyleToCategory without action
   */
  export type AssetStyleToCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetStyleToCategory
     */
    select?: AssetStyleToCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssetStyleToCategoryInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    loginId: 'loginId',
    loginPw: 'loginPw',
    username: 'username',
    loginType: 'loginType',
    userType: 'userType',
    nickname: 'nickname',
    isDisable: 'isDisable'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AssetCategoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    categoryCode: 'categoryCode',
    categoryName: 'categoryName',
    parentId: 'parentId',
    userId: 'userId',
    isDisable: 'isDisable'
  };

  export type AssetCategoryScalarFieldEnum = (typeof AssetCategoryScalarFieldEnum)[keyof typeof AssetCategoryScalarFieldEnum]


  export const AssetStyleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    styleCode: 'styleCode',
    styleName: 'styleName',
    isDisable: 'isDisable'
  };

  export type AssetStyleScalarFieldEnum = (typeof AssetStyleScalarFieldEnum)[keyof typeof AssetStyleScalarFieldEnum]


  export const AssetStyleToCategoryScalarFieldEnum: {
    categoryId: 'categoryId',
    styleId: 'styleId',
    createdAt: 'createdAt'
  };

  export type AssetStyleToCategoryScalarFieldEnum = (typeof AssetStyleToCategoryScalarFieldEnum)[keyof typeof AssetStyleToCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'LoginType'
   */
  export type EnumLoginTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoginType'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    loginId?: StringFilter<"User"> | string
    loginPw?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    loginType?: EnumLoginTypeFilter<"User"> | $Enums.LoginType
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    nickname?: StringFilter<"User"> | string
    isDisable?: BoolFilter<"User"> | boolean
    AssetCategory?: AssetCategoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrderInput | SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    isDisable?: SortOrder
    AssetCategory?: AssetCategoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    loginUnique?: UserLoginUniqueCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    loginId?: StringFilter<"User"> | string
    loginPw?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    loginType?: EnumLoginTypeFilter<"User"> | $Enums.LoginType
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    nickname?: StringFilter<"User"> | string
    isDisable?: BoolFilter<"User"> | boolean
    AssetCategory?: AssetCategoryListRelationFilter
  }, "id" | "loginUnique">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrderInput | SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    isDisable?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    loginId?: StringWithAggregatesFilter<"User"> | string
    loginPw?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    loginType?: EnumLoginTypeWithAggregatesFilter<"User"> | $Enums.LoginType
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    nickname?: StringWithAggregatesFilter<"User"> | string
    isDisable?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type AssetCategoryWhereInput = {
    AND?: AssetCategoryWhereInput | AssetCategoryWhereInput[]
    OR?: AssetCategoryWhereInput[]
    NOT?: AssetCategoryWhereInput | AssetCategoryWhereInput[]
    id?: IntFilter<"AssetCategory"> | number
    createdAt?: DateTimeFilter<"AssetCategory"> | Date | string
    categoryCode?: StringFilter<"AssetCategory"> | string
    categoryName?: StringFilter<"AssetCategory"> | string
    parentId?: IntNullableFilter<"AssetCategory"> | number | null
    userId?: IntNullableFilter<"AssetCategory"> | number | null
    isDisable?: BoolFilter<"AssetCategory"> | boolean
    AssetCategory?: XOR<AssetCategoryNullableRelationFilter, AssetCategoryWhereInput> | null
    childCategory?: AssetCategoryListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    AssetStyleToCategory?: AssetStyleToCategoryListRelationFilter
  }

  export type AssetCategoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    categoryCode?: SortOrder
    categoryName?: SortOrder
    parentId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    isDisable?: SortOrder
    AssetCategory?: AssetCategoryOrderByWithRelationInput
    childCategory?: AssetCategoryOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    AssetStyleToCategory?: AssetStyleToCategoryOrderByRelationAggregateInput
  }

  export type AssetCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    categoryCode?: string
    AND?: AssetCategoryWhereInput | AssetCategoryWhereInput[]
    OR?: AssetCategoryWhereInput[]
    NOT?: AssetCategoryWhereInput | AssetCategoryWhereInput[]
    createdAt?: DateTimeFilter<"AssetCategory"> | Date | string
    categoryName?: StringFilter<"AssetCategory"> | string
    parentId?: IntNullableFilter<"AssetCategory"> | number | null
    userId?: IntNullableFilter<"AssetCategory"> | number | null
    isDisable?: BoolFilter<"AssetCategory"> | boolean
    AssetCategory?: XOR<AssetCategoryNullableRelationFilter, AssetCategoryWhereInput> | null
    childCategory?: AssetCategoryListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    AssetStyleToCategory?: AssetStyleToCategoryListRelationFilter
  }, "id" | "categoryCode">

  export type AssetCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    categoryCode?: SortOrder
    categoryName?: SortOrder
    parentId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    isDisable?: SortOrder
    _count?: AssetCategoryCountOrderByAggregateInput
    _avg?: AssetCategoryAvgOrderByAggregateInput
    _max?: AssetCategoryMaxOrderByAggregateInput
    _min?: AssetCategoryMinOrderByAggregateInput
    _sum?: AssetCategorySumOrderByAggregateInput
  }

  export type AssetCategoryScalarWhereWithAggregatesInput = {
    AND?: AssetCategoryScalarWhereWithAggregatesInput | AssetCategoryScalarWhereWithAggregatesInput[]
    OR?: AssetCategoryScalarWhereWithAggregatesInput[]
    NOT?: AssetCategoryScalarWhereWithAggregatesInput | AssetCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssetCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AssetCategory"> | Date | string
    categoryCode?: StringWithAggregatesFilter<"AssetCategory"> | string
    categoryName?: StringWithAggregatesFilter<"AssetCategory"> | string
    parentId?: IntNullableWithAggregatesFilter<"AssetCategory"> | number | null
    userId?: IntNullableWithAggregatesFilter<"AssetCategory"> | number | null
    isDisable?: BoolWithAggregatesFilter<"AssetCategory"> | boolean
  }

  export type AssetStyleWhereInput = {
    AND?: AssetStyleWhereInput | AssetStyleWhereInput[]
    OR?: AssetStyleWhereInput[]
    NOT?: AssetStyleWhereInput | AssetStyleWhereInput[]
    id?: IntFilter<"AssetStyle"> | number
    createdAt?: DateTimeFilter<"AssetStyle"> | Date | string
    styleCode?: StringFilter<"AssetStyle"> | string
    styleName?: StringFilter<"AssetStyle"> | string
    isDisable?: BoolFilter<"AssetStyle"> | boolean
    AssetStyleToCategory?: AssetStyleToCategoryListRelationFilter
  }

  export type AssetStyleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    styleCode?: SortOrder
    styleName?: SortOrder
    isDisable?: SortOrder
    AssetStyleToCategory?: AssetStyleToCategoryOrderByRelationAggregateInput
  }

  export type AssetStyleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    styleCode?: string
    styleName?: string
    AND?: AssetStyleWhereInput | AssetStyleWhereInput[]
    OR?: AssetStyleWhereInput[]
    NOT?: AssetStyleWhereInput | AssetStyleWhereInput[]
    createdAt?: DateTimeFilter<"AssetStyle"> | Date | string
    isDisable?: BoolFilter<"AssetStyle"> | boolean
    AssetStyleToCategory?: AssetStyleToCategoryListRelationFilter
  }, "id" | "styleCode" | "styleName">

  export type AssetStyleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    styleCode?: SortOrder
    styleName?: SortOrder
    isDisable?: SortOrder
    _count?: AssetStyleCountOrderByAggregateInput
    _avg?: AssetStyleAvgOrderByAggregateInput
    _max?: AssetStyleMaxOrderByAggregateInput
    _min?: AssetStyleMinOrderByAggregateInput
    _sum?: AssetStyleSumOrderByAggregateInput
  }

  export type AssetStyleScalarWhereWithAggregatesInput = {
    AND?: AssetStyleScalarWhereWithAggregatesInput | AssetStyleScalarWhereWithAggregatesInput[]
    OR?: AssetStyleScalarWhereWithAggregatesInput[]
    NOT?: AssetStyleScalarWhereWithAggregatesInput | AssetStyleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssetStyle"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AssetStyle"> | Date | string
    styleCode?: StringWithAggregatesFilter<"AssetStyle"> | string
    styleName?: StringWithAggregatesFilter<"AssetStyle"> | string
    isDisable?: BoolWithAggregatesFilter<"AssetStyle"> | boolean
  }

  export type AssetStyleToCategoryWhereInput = {
    AND?: AssetStyleToCategoryWhereInput | AssetStyleToCategoryWhereInput[]
    OR?: AssetStyleToCategoryWhereInput[]
    NOT?: AssetStyleToCategoryWhereInput | AssetStyleToCategoryWhereInput[]
    categoryId?: IntFilter<"AssetStyleToCategory"> | number
    styleId?: IntFilter<"AssetStyleToCategory"> | number
    createdAt?: DateTimeFilter<"AssetStyleToCategory"> | Date | string
    AssetCategory?: XOR<AssetCategoryRelationFilter, AssetCategoryWhereInput>
    AssetStyle?: XOR<AssetStyleRelationFilter, AssetStyleWhereInput>
  }

  export type AssetStyleToCategoryOrderByWithRelationInput = {
    categoryId?: SortOrder
    styleId?: SortOrder
    createdAt?: SortOrder
    AssetCategory?: AssetCategoryOrderByWithRelationInput
    AssetStyle?: AssetStyleOrderByWithRelationInput
  }

  export type AssetStyleToCategoryWhereUniqueInput = Prisma.AtLeast<{
    categoryId_styleId?: AssetStyleToCategoryCategoryIdStyleIdCompoundUniqueInput
    AND?: AssetStyleToCategoryWhereInput | AssetStyleToCategoryWhereInput[]
    OR?: AssetStyleToCategoryWhereInput[]
    NOT?: AssetStyleToCategoryWhereInput | AssetStyleToCategoryWhereInput[]
    categoryId?: IntFilter<"AssetStyleToCategory"> | number
    styleId?: IntFilter<"AssetStyleToCategory"> | number
    createdAt?: DateTimeFilter<"AssetStyleToCategory"> | Date | string
    AssetCategory?: XOR<AssetCategoryRelationFilter, AssetCategoryWhereInput>
    AssetStyle?: XOR<AssetStyleRelationFilter, AssetStyleWhereInput>
  }, "categoryId_styleId">

  export type AssetStyleToCategoryOrderByWithAggregationInput = {
    categoryId?: SortOrder
    styleId?: SortOrder
    createdAt?: SortOrder
    _count?: AssetStyleToCategoryCountOrderByAggregateInput
    _avg?: AssetStyleToCategoryAvgOrderByAggregateInput
    _max?: AssetStyleToCategoryMaxOrderByAggregateInput
    _min?: AssetStyleToCategoryMinOrderByAggregateInput
    _sum?: AssetStyleToCategorySumOrderByAggregateInput
  }

  export type AssetStyleToCategoryScalarWhereWithAggregatesInput = {
    AND?: AssetStyleToCategoryScalarWhereWithAggregatesInput | AssetStyleToCategoryScalarWhereWithAggregatesInput[]
    OR?: AssetStyleToCategoryScalarWhereWithAggregatesInput[]
    NOT?: AssetStyleToCategoryScalarWhereWithAggregatesInput | AssetStyleToCategoryScalarWhereWithAggregatesInput[]
    categoryId?: IntWithAggregatesFilter<"AssetStyleToCategory"> | number
    styleId?: IntWithAggregatesFilter<"AssetStyleToCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AssetStyleToCategory"> | Date | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: $Enums.LoginType
    userType: $Enums.UserType
    nickname: string
    isDisable?: boolean
    AssetCategory?: AssetCategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: $Enums.LoginType
    userType: $Enums.UserType
    nickname: string
    isDisable?: boolean
    AssetCategory?: AssetCategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | $Enums.LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    nickname?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    AssetCategory?: AssetCategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | $Enums.LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    nickname?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    AssetCategory?: AssetCategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: $Enums.LoginType
    userType: $Enums.UserType
    nickname: string
    isDisable?: boolean
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | $Enums.LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    nickname?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | $Enums.LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    nickname?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetCategoryCreateInput = {
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    isDisable?: boolean
    AssetCategory?: AssetCategoryCreateNestedOneWithoutChildCategoryInput
    childCategory?: AssetCategoryCreateNestedManyWithoutAssetCategoryInput
    User?: UserCreateNestedOneWithoutAssetCategoryInput
    AssetStyleToCategory?: AssetStyleToCategoryCreateNestedManyWithoutAssetCategoryInput
  }

  export type AssetCategoryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    parentId?: number | null
    userId?: number | null
    isDisable?: boolean
    childCategory?: AssetCategoryUncheckedCreateNestedManyWithoutAssetCategoryInput
    AssetStyleToCategory?: AssetStyleToCategoryUncheckedCreateNestedManyWithoutAssetCategoryInput
  }

  export type AssetCategoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    AssetCategory?: AssetCategoryUpdateOneWithoutChildCategoryNestedInput
    childCategory?: AssetCategoryUpdateManyWithoutAssetCategoryNestedInput
    User?: UserUpdateOneWithoutAssetCategoryNestedInput
    AssetStyleToCategory?: AssetStyleToCategoryUpdateManyWithoutAssetCategoryNestedInput
  }

  export type AssetCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    childCategory?: AssetCategoryUncheckedUpdateManyWithoutAssetCategoryNestedInput
    AssetStyleToCategory?: AssetStyleToCategoryUncheckedUpdateManyWithoutAssetCategoryNestedInput
  }

  export type AssetCategoryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    parentId?: number | null
    userId?: number | null
    isDisable?: boolean
  }

  export type AssetCategoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetStyleCreateInput = {
    createdAt?: Date | string
    styleCode: string
    styleName: string
    isDisable?: boolean
    AssetStyleToCategory?: AssetStyleToCategoryCreateNestedManyWithoutAssetStyleInput
  }

  export type AssetStyleUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    styleCode: string
    styleName: string
    isDisable?: boolean
    AssetStyleToCategory?: AssetStyleToCategoryUncheckedCreateNestedManyWithoutAssetStyleInput
  }

  export type AssetStyleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    styleCode?: StringFieldUpdateOperationsInput | string
    styleName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    AssetStyleToCategory?: AssetStyleToCategoryUpdateManyWithoutAssetStyleNestedInput
  }

  export type AssetStyleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    styleCode?: StringFieldUpdateOperationsInput | string
    styleName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    AssetStyleToCategory?: AssetStyleToCategoryUncheckedUpdateManyWithoutAssetStyleNestedInput
  }

  export type AssetStyleCreateManyInput = {
    id?: number
    createdAt?: Date | string
    styleCode: string
    styleName: string
    isDisable?: boolean
  }

  export type AssetStyleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    styleCode?: StringFieldUpdateOperationsInput | string
    styleName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetStyleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    styleCode?: StringFieldUpdateOperationsInput | string
    styleName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetStyleToCategoryCreateInput = {
    createdAt?: Date | string
    AssetCategory: AssetCategoryCreateNestedOneWithoutAssetStyleToCategoryInput
    AssetStyle: AssetStyleCreateNestedOneWithoutAssetStyleToCategoryInput
  }

  export type AssetStyleToCategoryUncheckedCreateInput = {
    categoryId: number
    styleId: number
    createdAt?: Date | string
  }

  export type AssetStyleToCategoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssetCategory?: AssetCategoryUpdateOneRequiredWithoutAssetStyleToCategoryNestedInput
    AssetStyle?: AssetStyleUpdateOneRequiredWithoutAssetStyleToCategoryNestedInput
  }

  export type AssetStyleToCategoryUncheckedUpdateInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    styleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetStyleToCategoryCreateManyInput = {
    categoryId: number
    styleId: number
    createdAt?: Date | string
  }

  export type AssetStyleToCategoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetStyleToCategoryUncheckedUpdateManyInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    styleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumLoginTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginType | EnumLoginTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoginType[]
    notIn?: $Enums.LoginType[]
    not?: NestedEnumLoginTypeFilter<$PrismaModel> | $Enums.LoginType
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AssetCategoryListRelationFilter = {
    every?: AssetCategoryWhereInput
    some?: AssetCategoryWhereInput
    none?: AssetCategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssetCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLoginUniqueCompoundUniqueInput = {
    loginType: $Enums.LoginType
    loginId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    isDisable?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    isDisable?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    isDisable?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumLoginTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginType | EnumLoginTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoginType[]
    notIn?: $Enums.LoginType[]
    not?: NestedEnumLoginTypeWithAggregatesFilter<$PrismaModel> | $Enums.LoginType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoginTypeFilter<$PrismaModel>
    _max?: NestedEnumLoginTypeFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AssetCategoryNullableRelationFilter = {
    is?: AssetCategoryWhereInput | null
    isNot?: AssetCategoryWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AssetStyleToCategoryListRelationFilter = {
    every?: AssetStyleToCategoryWhereInput
    some?: AssetStyleToCategoryWhereInput
    none?: AssetStyleToCategoryWhereInput
  }

  export type AssetStyleToCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    categoryCode?: SortOrder
    categoryName?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    isDisable?: SortOrder
  }

  export type AssetCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
  }

  export type AssetCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    categoryCode?: SortOrder
    categoryName?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    isDisable?: SortOrder
  }

  export type AssetCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    categoryCode?: SortOrder
    categoryName?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    isDisable?: SortOrder
  }

  export type AssetCategorySumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AssetStyleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    styleCode?: SortOrder
    styleName?: SortOrder
    isDisable?: SortOrder
  }

  export type AssetStyleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AssetStyleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    styleCode?: SortOrder
    styleName?: SortOrder
    isDisable?: SortOrder
  }

  export type AssetStyleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    styleCode?: SortOrder
    styleName?: SortOrder
    isDisable?: SortOrder
  }

  export type AssetStyleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AssetCategoryRelationFilter = {
    is?: AssetCategoryWhereInput
    isNot?: AssetCategoryWhereInput
  }

  export type AssetStyleRelationFilter = {
    is?: AssetStyleWhereInput
    isNot?: AssetStyleWhereInput
  }

  export type AssetStyleToCategoryCategoryIdStyleIdCompoundUniqueInput = {
    categoryId: number
    styleId: number
  }

  export type AssetStyleToCategoryCountOrderByAggregateInput = {
    categoryId?: SortOrder
    styleId?: SortOrder
    createdAt?: SortOrder
  }

  export type AssetStyleToCategoryAvgOrderByAggregateInput = {
    categoryId?: SortOrder
    styleId?: SortOrder
  }

  export type AssetStyleToCategoryMaxOrderByAggregateInput = {
    categoryId?: SortOrder
    styleId?: SortOrder
    createdAt?: SortOrder
  }

  export type AssetStyleToCategoryMinOrderByAggregateInput = {
    categoryId?: SortOrder
    styleId?: SortOrder
    createdAt?: SortOrder
  }

  export type AssetStyleToCategorySumOrderByAggregateInput = {
    categoryId?: SortOrder
    styleId?: SortOrder
  }

  export type AssetCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<AssetCategoryCreateWithoutUserInput, AssetCategoryUncheckedCreateWithoutUserInput> | AssetCategoryCreateWithoutUserInput[] | AssetCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutUserInput | AssetCategoryCreateOrConnectWithoutUserInput[]
    createMany?: AssetCategoryCreateManyUserInputEnvelope
    connect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
  }

  export type AssetCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssetCategoryCreateWithoutUserInput, AssetCategoryUncheckedCreateWithoutUserInput> | AssetCategoryCreateWithoutUserInput[] | AssetCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutUserInput | AssetCategoryCreateOrConnectWithoutUserInput[]
    createMany?: AssetCategoryCreateManyUserInputEnvelope
    connect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLoginTypeFieldUpdateOperationsInput = {
    set?: $Enums.LoginType
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AssetCategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssetCategoryCreateWithoutUserInput, AssetCategoryUncheckedCreateWithoutUserInput> | AssetCategoryCreateWithoutUserInput[] | AssetCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutUserInput | AssetCategoryCreateOrConnectWithoutUserInput[]
    upsert?: AssetCategoryUpsertWithWhereUniqueWithoutUserInput | AssetCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssetCategoryCreateManyUserInputEnvelope
    set?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    disconnect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    delete?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    connect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    update?: AssetCategoryUpdateWithWhereUniqueWithoutUserInput | AssetCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssetCategoryUpdateManyWithWhereWithoutUserInput | AssetCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssetCategoryScalarWhereInput | AssetCategoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssetCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssetCategoryCreateWithoutUserInput, AssetCategoryUncheckedCreateWithoutUserInput> | AssetCategoryCreateWithoutUserInput[] | AssetCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutUserInput | AssetCategoryCreateOrConnectWithoutUserInput[]
    upsert?: AssetCategoryUpsertWithWhereUniqueWithoutUserInput | AssetCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssetCategoryCreateManyUserInputEnvelope
    set?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    disconnect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    delete?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    connect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    update?: AssetCategoryUpdateWithWhereUniqueWithoutUserInput | AssetCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssetCategoryUpdateManyWithWhereWithoutUserInput | AssetCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssetCategoryScalarWhereInput | AssetCategoryScalarWhereInput[]
  }

  export type AssetCategoryCreateNestedOneWithoutChildCategoryInput = {
    create?: XOR<AssetCategoryCreateWithoutChildCategoryInput, AssetCategoryUncheckedCreateWithoutChildCategoryInput>
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutChildCategoryInput
    connect?: AssetCategoryWhereUniqueInput
  }

  export type AssetCategoryCreateNestedManyWithoutAssetCategoryInput = {
    create?: XOR<AssetCategoryCreateWithoutAssetCategoryInput, AssetCategoryUncheckedCreateWithoutAssetCategoryInput> | AssetCategoryCreateWithoutAssetCategoryInput[] | AssetCategoryUncheckedCreateWithoutAssetCategoryInput[]
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutAssetCategoryInput | AssetCategoryCreateOrConnectWithoutAssetCategoryInput[]
    createMany?: AssetCategoryCreateManyAssetCategoryInputEnvelope
    connect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAssetCategoryInput = {
    create?: XOR<UserCreateWithoutAssetCategoryInput, UserUncheckedCreateWithoutAssetCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssetCategoryInput
    connect?: UserWhereUniqueInput
  }

  export type AssetStyleToCategoryCreateNestedManyWithoutAssetCategoryInput = {
    create?: XOR<AssetStyleToCategoryCreateWithoutAssetCategoryInput, AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput> | AssetStyleToCategoryCreateWithoutAssetCategoryInput[] | AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput[]
    connectOrCreate?: AssetStyleToCategoryCreateOrConnectWithoutAssetCategoryInput | AssetStyleToCategoryCreateOrConnectWithoutAssetCategoryInput[]
    createMany?: AssetStyleToCategoryCreateManyAssetCategoryInputEnvelope
    connect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
  }

  export type AssetCategoryUncheckedCreateNestedManyWithoutAssetCategoryInput = {
    create?: XOR<AssetCategoryCreateWithoutAssetCategoryInput, AssetCategoryUncheckedCreateWithoutAssetCategoryInput> | AssetCategoryCreateWithoutAssetCategoryInput[] | AssetCategoryUncheckedCreateWithoutAssetCategoryInput[]
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutAssetCategoryInput | AssetCategoryCreateOrConnectWithoutAssetCategoryInput[]
    createMany?: AssetCategoryCreateManyAssetCategoryInputEnvelope
    connect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
  }

  export type AssetStyleToCategoryUncheckedCreateNestedManyWithoutAssetCategoryInput = {
    create?: XOR<AssetStyleToCategoryCreateWithoutAssetCategoryInput, AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput> | AssetStyleToCategoryCreateWithoutAssetCategoryInput[] | AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput[]
    connectOrCreate?: AssetStyleToCategoryCreateOrConnectWithoutAssetCategoryInput | AssetStyleToCategoryCreateOrConnectWithoutAssetCategoryInput[]
    createMany?: AssetStyleToCategoryCreateManyAssetCategoryInputEnvelope
    connect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
  }

  export type AssetCategoryUpdateOneWithoutChildCategoryNestedInput = {
    create?: XOR<AssetCategoryCreateWithoutChildCategoryInput, AssetCategoryUncheckedCreateWithoutChildCategoryInput>
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutChildCategoryInput
    upsert?: AssetCategoryUpsertWithoutChildCategoryInput
    disconnect?: AssetCategoryWhereInput | boolean
    delete?: AssetCategoryWhereInput | boolean
    connect?: AssetCategoryWhereUniqueInput
    update?: XOR<XOR<AssetCategoryUpdateToOneWithWhereWithoutChildCategoryInput, AssetCategoryUpdateWithoutChildCategoryInput>, AssetCategoryUncheckedUpdateWithoutChildCategoryInput>
  }

  export type AssetCategoryUpdateManyWithoutAssetCategoryNestedInput = {
    create?: XOR<AssetCategoryCreateWithoutAssetCategoryInput, AssetCategoryUncheckedCreateWithoutAssetCategoryInput> | AssetCategoryCreateWithoutAssetCategoryInput[] | AssetCategoryUncheckedCreateWithoutAssetCategoryInput[]
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutAssetCategoryInput | AssetCategoryCreateOrConnectWithoutAssetCategoryInput[]
    upsert?: AssetCategoryUpsertWithWhereUniqueWithoutAssetCategoryInput | AssetCategoryUpsertWithWhereUniqueWithoutAssetCategoryInput[]
    createMany?: AssetCategoryCreateManyAssetCategoryInputEnvelope
    set?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    disconnect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    delete?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    connect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    update?: AssetCategoryUpdateWithWhereUniqueWithoutAssetCategoryInput | AssetCategoryUpdateWithWhereUniqueWithoutAssetCategoryInput[]
    updateMany?: AssetCategoryUpdateManyWithWhereWithoutAssetCategoryInput | AssetCategoryUpdateManyWithWhereWithoutAssetCategoryInput[]
    deleteMany?: AssetCategoryScalarWhereInput | AssetCategoryScalarWhereInput[]
  }

  export type UserUpdateOneWithoutAssetCategoryNestedInput = {
    create?: XOR<UserCreateWithoutAssetCategoryInput, UserUncheckedCreateWithoutAssetCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssetCategoryInput
    upsert?: UserUpsertWithoutAssetCategoryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssetCategoryInput, UserUpdateWithoutAssetCategoryInput>, UserUncheckedUpdateWithoutAssetCategoryInput>
  }

  export type AssetStyleToCategoryUpdateManyWithoutAssetCategoryNestedInput = {
    create?: XOR<AssetStyleToCategoryCreateWithoutAssetCategoryInput, AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput> | AssetStyleToCategoryCreateWithoutAssetCategoryInput[] | AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput[]
    connectOrCreate?: AssetStyleToCategoryCreateOrConnectWithoutAssetCategoryInput | AssetStyleToCategoryCreateOrConnectWithoutAssetCategoryInput[]
    upsert?: AssetStyleToCategoryUpsertWithWhereUniqueWithoutAssetCategoryInput | AssetStyleToCategoryUpsertWithWhereUniqueWithoutAssetCategoryInput[]
    createMany?: AssetStyleToCategoryCreateManyAssetCategoryInputEnvelope
    set?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    disconnect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    delete?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    connect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    update?: AssetStyleToCategoryUpdateWithWhereUniqueWithoutAssetCategoryInput | AssetStyleToCategoryUpdateWithWhereUniqueWithoutAssetCategoryInput[]
    updateMany?: AssetStyleToCategoryUpdateManyWithWhereWithoutAssetCategoryInput | AssetStyleToCategoryUpdateManyWithWhereWithoutAssetCategoryInput[]
    deleteMany?: AssetStyleToCategoryScalarWhereInput | AssetStyleToCategoryScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssetCategoryUncheckedUpdateManyWithoutAssetCategoryNestedInput = {
    create?: XOR<AssetCategoryCreateWithoutAssetCategoryInput, AssetCategoryUncheckedCreateWithoutAssetCategoryInput> | AssetCategoryCreateWithoutAssetCategoryInput[] | AssetCategoryUncheckedCreateWithoutAssetCategoryInput[]
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutAssetCategoryInput | AssetCategoryCreateOrConnectWithoutAssetCategoryInput[]
    upsert?: AssetCategoryUpsertWithWhereUniqueWithoutAssetCategoryInput | AssetCategoryUpsertWithWhereUniqueWithoutAssetCategoryInput[]
    createMany?: AssetCategoryCreateManyAssetCategoryInputEnvelope
    set?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    disconnect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    delete?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    connect?: AssetCategoryWhereUniqueInput | AssetCategoryWhereUniqueInput[]
    update?: AssetCategoryUpdateWithWhereUniqueWithoutAssetCategoryInput | AssetCategoryUpdateWithWhereUniqueWithoutAssetCategoryInput[]
    updateMany?: AssetCategoryUpdateManyWithWhereWithoutAssetCategoryInput | AssetCategoryUpdateManyWithWhereWithoutAssetCategoryInput[]
    deleteMany?: AssetCategoryScalarWhereInput | AssetCategoryScalarWhereInput[]
  }

  export type AssetStyleToCategoryUncheckedUpdateManyWithoutAssetCategoryNestedInput = {
    create?: XOR<AssetStyleToCategoryCreateWithoutAssetCategoryInput, AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput> | AssetStyleToCategoryCreateWithoutAssetCategoryInput[] | AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput[]
    connectOrCreate?: AssetStyleToCategoryCreateOrConnectWithoutAssetCategoryInput | AssetStyleToCategoryCreateOrConnectWithoutAssetCategoryInput[]
    upsert?: AssetStyleToCategoryUpsertWithWhereUniqueWithoutAssetCategoryInput | AssetStyleToCategoryUpsertWithWhereUniqueWithoutAssetCategoryInput[]
    createMany?: AssetStyleToCategoryCreateManyAssetCategoryInputEnvelope
    set?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    disconnect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    delete?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    connect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    update?: AssetStyleToCategoryUpdateWithWhereUniqueWithoutAssetCategoryInput | AssetStyleToCategoryUpdateWithWhereUniqueWithoutAssetCategoryInput[]
    updateMany?: AssetStyleToCategoryUpdateManyWithWhereWithoutAssetCategoryInput | AssetStyleToCategoryUpdateManyWithWhereWithoutAssetCategoryInput[]
    deleteMany?: AssetStyleToCategoryScalarWhereInput | AssetStyleToCategoryScalarWhereInput[]
  }

  export type AssetStyleToCategoryCreateNestedManyWithoutAssetStyleInput = {
    create?: XOR<AssetStyleToCategoryCreateWithoutAssetStyleInput, AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput> | AssetStyleToCategoryCreateWithoutAssetStyleInput[] | AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput[]
    connectOrCreate?: AssetStyleToCategoryCreateOrConnectWithoutAssetStyleInput | AssetStyleToCategoryCreateOrConnectWithoutAssetStyleInput[]
    createMany?: AssetStyleToCategoryCreateManyAssetStyleInputEnvelope
    connect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
  }

  export type AssetStyleToCategoryUncheckedCreateNestedManyWithoutAssetStyleInput = {
    create?: XOR<AssetStyleToCategoryCreateWithoutAssetStyleInput, AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput> | AssetStyleToCategoryCreateWithoutAssetStyleInput[] | AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput[]
    connectOrCreate?: AssetStyleToCategoryCreateOrConnectWithoutAssetStyleInput | AssetStyleToCategoryCreateOrConnectWithoutAssetStyleInput[]
    createMany?: AssetStyleToCategoryCreateManyAssetStyleInputEnvelope
    connect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
  }

  export type AssetStyleToCategoryUpdateManyWithoutAssetStyleNestedInput = {
    create?: XOR<AssetStyleToCategoryCreateWithoutAssetStyleInput, AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput> | AssetStyleToCategoryCreateWithoutAssetStyleInput[] | AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput[]
    connectOrCreate?: AssetStyleToCategoryCreateOrConnectWithoutAssetStyleInput | AssetStyleToCategoryCreateOrConnectWithoutAssetStyleInput[]
    upsert?: AssetStyleToCategoryUpsertWithWhereUniqueWithoutAssetStyleInput | AssetStyleToCategoryUpsertWithWhereUniqueWithoutAssetStyleInput[]
    createMany?: AssetStyleToCategoryCreateManyAssetStyleInputEnvelope
    set?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    disconnect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    delete?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    connect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    update?: AssetStyleToCategoryUpdateWithWhereUniqueWithoutAssetStyleInput | AssetStyleToCategoryUpdateWithWhereUniqueWithoutAssetStyleInput[]
    updateMany?: AssetStyleToCategoryUpdateManyWithWhereWithoutAssetStyleInput | AssetStyleToCategoryUpdateManyWithWhereWithoutAssetStyleInput[]
    deleteMany?: AssetStyleToCategoryScalarWhereInput | AssetStyleToCategoryScalarWhereInput[]
  }

  export type AssetStyleToCategoryUncheckedUpdateManyWithoutAssetStyleNestedInput = {
    create?: XOR<AssetStyleToCategoryCreateWithoutAssetStyleInput, AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput> | AssetStyleToCategoryCreateWithoutAssetStyleInput[] | AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput[]
    connectOrCreate?: AssetStyleToCategoryCreateOrConnectWithoutAssetStyleInput | AssetStyleToCategoryCreateOrConnectWithoutAssetStyleInput[]
    upsert?: AssetStyleToCategoryUpsertWithWhereUniqueWithoutAssetStyleInput | AssetStyleToCategoryUpsertWithWhereUniqueWithoutAssetStyleInput[]
    createMany?: AssetStyleToCategoryCreateManyAssetStyleInputEnvelope
    set?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    disconnect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    delete?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    connect?: AssetStyleToCategoryWhereUniqueInput | AssetStyleToCategoryWhereUniqueInput[]
    update?: AssetStyleToCategoryUpdateWithWhereUniqueWithoutAssetStyleInput | AssetStyleToCategoryUpdateWithWhereUniqueWithoutAssetStyleInput[]
    updateMany?: AssetStyleToCategoryUpdateManyWithWhereWithoutAssetStyleInput | AssetStyleToCategoryUpdateManyWithWhereWithoutAssetStyleInput[]
    deleteMany?: AssetStyleToCategoryScalarWhereInput | AssetStyleToCategoryScalarWhereInput[]
  }

  export type AssetCategoryCreateNestedOneWithoutAssetStyleToCategoryInput = {
    create?: XOR<AssetCategoryCreateWithoutAssetStyleToCategoryInput, AssetCategoryUncheckedCreateWithoutAssetStyleToCategoryInput>
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutAssetStyleToCategoryInput
    connect?: AssetCategoryWhereUniqueInput
  }

  export type AssetStyleCreateNestedOneWithoutAssetStyleToCategoryInput = {
    create?: XOR<AssetStyleCreateWithoutAssetStyleToCategoryInput, AssetStyleUncheckedCreateWithoutAssetStyleToCategoryInput>
    connectOrCreate?: AssetStyleCreateOrConnectWithoutAssetStyleToCategoryInput
    connect?: AssetStyleWhereUniqueInput
  }

  export type AssetCategoryUpdateOneRequiredWithoutAssetStyleToCategoryNestedInput = {
    create?: XOR<AssetCategoryCreateWithoutAssetStyleToCategoryInput, AssetCategoryUncheckedCreateWithoutAssetStyleToCategoryInput>
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutAssetStyleToCategoryInput
    upsert?: AssetCategoryUpsertWithoutAssetStyleToCategoryInput
    connect?: AssetCategoryWhereUniqueInput
    update?: XOR<XOR<AssetCategoryUpdateToOneWithWhereWithoutAssetStyleToCategoryInput, AssetCategoryUpdateWithoutAssetStyleToCategoryInput>, AssetCategoryUncheckedUpdateWithoutAssetStyleToCategoryInput>
  }

  export type AssetStyleUpdateOneRequiredWithoutAssetStyleToCategoryNestedInput = {
    create?: XOR<AssetStyleCreateWithoutAssetStyleToCategoryInput, AssetStyleUncheckedCreateWithoutAssetStyleToCategoryInput>
    connectOrCreate?: AssetStyleCreateOrConnectWithoutAssetStyleToCategoryInput
    upsert?: AssetStyleUpsertWithoutAssetStyleToCategoryInput
    connect?: AssetStyleWhereUniqueInput
    update?: XOR<XOR<AssetStyleUpdateToOneWithWhereWithoutAssetStyleToCategoryInput, AssetStyleUpdateWithoutAssetStyleToCategoryInput>, AssetStyleUncheckedUpdateWithoutAssetStyleToCategoryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumLoginTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginType | EnumLoginTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoginType[]
    notIn?: $Enums.LoginType[]
    not?: NestedEnumLoginTypeFilter<$PrismaModel> | $Enums.LoginType
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLoginTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginType | EnumLoginTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoginType[]
    notIn?: $Enums.LoginType[]
    not?: NestedEnumLoginTypeWithAggregatesFilter<$PrismaModel> | $Enums.LoginType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoginTypeFilter<$PrismaModel>
    _max?: NestedEnumLoginTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AssetCategoryCreateWithoutUserInput = {
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    isDisable?: boolean
    AssetCategory?: AssetCategoryCreateNestedOneWithoutChildCategoryInput
    childCategory?: AssetCategoryCreateNestedManyWithoutAssetCategoryInput
    AssetStyleToCategory?: AssetStyleToCategoryCreateNestedManyWithoutAssetCategoryInput
  }

  export type AssetCategoryUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    parentId?: number | null
    isDisable?: boolean
    childCategory?: AssetCategoryUncheckedCreateNestedManyWithoutAssetCategoryInput
    AssetStyleToCategory?: AssetStyleToCategoryUncheckedCreateNestedManyWithoutAssetCategoryInput
  }

  export type AssetCategoryCreateOrConnectWithoutUserInput = {
    where: AssetCategoryWhereUniqueInput
    create: XOR<AssetCategoryCreateWithoutUserInput, AssetCategoryUncheckedCreateWithoutUserInput>
  }

  export type AssetCategoryCreateManyUserInputEnvelope = {
    data: AssetCategoryCreateManyUserInput | AssetCategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AssetCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: AssetCategoryWhereUniqueInput
    update: XOR<AssetCategoryUpdateWithoutUserInput, AssetCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<AssetCategoryCreateWithoutUserInput, AssetCategoryUncheckedCreateWithoutUserInput>
  }

  export type AssetCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: AssetCategoryWhereUniqueInput
    data: XOR<AssetCategoryUpdateWithoutUserInput, AssetCategoryUncheckedUpdateWithoutUserInput>
  }

  export type AssetCategoryUpdateManyWithWhereWithoutUserInput = {
    where: AssetCategoryScalarWhereInput
    data: XOR<AssetCategoryUpdateManyMutationInput, AssetCategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type AssetCategoryScalarWhereInput = {
    AND?: AssetCategoryScalarWhereInput | AssetCategoryScalarWhereInput[]
    OR?: AssetCategoryScalarWhereInput[]
    NOT?: AssetCategoryScalarWhereInput | AssetCategoryScalarWhereInput[]
    id?: IntFilter<"AssetCategory"> | number
    createdAt?: DateTimeFilter<"AssetCategory"> | Date | string
    categoryCode?: StringFilter<"AssetCategory"> | string
    categoryName?: StringFilter<"AssetCategory"> | string
    parentId?: IntNullableFilter<"AssetCategory"> | number | null
    userId?: IntNullableFilter<"AssetCategory"> | number | null
    isDisable?: BoolFilter<"AssetCategory"> | boolean
  }

  export type AssetCategoryCreateWithoutChildCategoryInput = {
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    isDisable?: boolean
    AssetCategory?: AssetCategoryCreateNestedOneWithoutChildCategoryInput
    User?: UserCreateNestedOneWithoutAssetCategoryInput
    AssetStyleToCategory?: AssetStyleToCategoryCreateNestedManyWithoutAssetCategoryInput
  }

  export type AssetCategoryUncheckedCreateWithoutChildCategoryInput = {
    id?: number
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    parentId?: number | null
    userId?: number | null
    isDisable?: boolean
    AssetStyleToCategory?: AssetStyleToCategoryUncheckedCreateNestedManyWithoutAssetCategoryInput
  }

  export type AssetCategoryCreateOrConnectWithoutChildCategoryInput = {
    where: AssetCategoryWhereUniqueInput
    create: XOR<AssetCategoryCreateWithoutChildCategoryInput, AssetCategoryUncheckedCreateWithoutChildCategoryInput>
  }

  export type AssetCategoryCreateWithoutAssetCategoryInput = {
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    isDisable?: boolean
    childCategory?: AssetCategoryCreateNestedManyWithoutAssetCategoryInput
    User?: UserCreateNestedOneWithoutAssetCategoryInput
    AssetStyleToCategory?: AssetStyleToCategoryCreateNestedManyWithoutAssetCategoryInput
  }

  export type AssetCategoryUncheckedCreateWithoutAssetCategoryInput = {
    id?: number
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    userId?: number | null
    isDisable?: boolean
    childCategory?: AssetCategoryUncheckedCreateNestedManyWithoutAssetCategoryInput
    AssetStyleToCategory?: AssetStyleToCategoryUncheckedCreateNestedManyWithoutAssetCategoryInput
  }

  export type AssetCategoryCreateOrConnectWithoutAssetCategoryInput = {
    where: AssetCategoryWhereUniqueInput
    create: XOR<AssetCategoryCreateWithoutAssetCategoryInput, AssetCategoryUncheckedCreateWithoutAssetCategoryInput>
  }

  export type AssetCategoryCreateManyAssetCategoryInputEnvelope = {
    data: AssetCategoryCreateManyAssetCategoryInput | AssetCategoryCreateManyAssetCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAssetCategoryInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: $Enums.LoginType
    userType: $Enums.UserType
    nickname: string
    isDisable?: boolean
  }

  export type UserUncheckedCreateWithoutAssetCategoryInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: $Enums.LoginType
    userType: $Enums.UserType
    nickname: string
    isDisable?: boolean
  }

  export type UserCreateOrConnectWithoutAssetCategoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssetCategoryInput, UserUncheckedCreateWithoutAssetCategoryInput>
  }

  export type AssetStyleToCategoryCreateWithoutAssetCategoryInput = {
    createdAt?: Date | string
    AssetStyle: AssetStyleCreateNestedOneWithoutAssetStyleToCategoryInput
  }

  export type AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput = {
    styleId: number
    createdAt?: Date | string
  }

  export type AssetStyleToCategoryCreateOrConnectWithoutAssetCategoryInput = {
    where: AssetStyleToCategoryWhereUniqueInput
    create: XOR<AssetStyleToCategoryCreateWithoutAssetCategoryInput, AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput>
  }

  export type AssetStyleToCategoryCreateManyAssetCategoryInputEnvelope = {
    data: AssetStyleToCategoryCreateManyAssetCategoryInput | AssetStyleToCategoryCreateManyAssetCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AssetCategoryUpsertWithoutChildCategoryInput = {
    update: XOR<AssetCategoryUpdateWithoutChildCategoryInput, AssetCategoryUncheckedUpdateWithoutChildCategoryInput>
    create: XOR<AssetCategoryCreateWithoutChildCategoryInput, AssetCategoryUncheckedCreateWithoutChildCategoryInput>
    where?: AssetCategoryWhereInput
  }

  export type AssetCategoryUpdateToOneWithWhereWithoutChildCategoryInput = {
    where?: AssetCategoryWhereInput
    data: XOR<AssetCategoryUpdateWithoutChildCategoryInput, AssetCategoryUncheckedUpdateWithoutChildCategoryInput>
  }

  export type AssetCategoryUpdateWithoutChildCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    AssetCategory?: AssetCategoryUpdateOneWithoutChildCategoryNestedInput
    User?: UserUpdateOneWithoutAssetCategoryNestedInput
    AssetStyleToCategory?: AssetStyleToCategoryUpdateManyWithoutAssetCategoryNestedInput
  }

  export type AssetCategoryUncheckedUpdateWithoutChildCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    AssetStyleToCategory?: AssetStyleToCategoryUncheckedUpdateManyWithoutAssetCategoryNestedInput
  }

  export type AssetCategoryUpsertWithWhereUniqueWithoutAssetCategoryInput = {
    where: AssetCategoryWhereUniqueInput
    update: XOR<AssetCategoryUpdateWithoutAssetCategoryInput, AssetCategoryUncheckedUpdateWithoutAssetCategoryInput>
    create: XOR<AssetCategoryCreateWithoutAssetCategoryInput, AssetCategoryUncheckedCreateWithoutAssetCategoryInput>
  }

  export type AssetCategoryUpdateWithWhereUniqueWithoutAssetCategoryInput = {
    where: AssetCategoryWhereUniqueInput
    data: XOR<AssetCategoryUpdateWithoutAssetCategoryInput, AssetCategoryUncheckedUpdateWithoutAssetCategoryInput>
  }

  export type AssetCategoryUpdateManyWithWhereWithoutAssetCategoryInput = {
    where: AssetCategoryScalarWhereInput
    data: XOR<AssetCategoryUpdateManyMutationInput, AssetCategoryUncheckedUpdateManyWithoutAssetCategoryInput>
  }

  export type UserUpsertWithoutAssetCategoryInput = {
    update: XOR<UserUpdateWithoutAssetCategoryInput, UserUncheckedUpdateWithoutAssetCategoryInput>
    create: XOR<UserCreateWithoutAssetCategoryInput, UserUncheckedCreateWithoutAssetCategoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssetCategoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssetCategoryInput, UserUncheckedUpdateWithoutAssetCategoryInput>
  }

  export type UserUpdateWithoutAssetCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | $Enums.LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    nickname?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutAssetCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | $Enums.LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    nickname?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetStyleToCategoryUpsertWithWhereUniqueWithoutAssetCategoryInput = {
    where: AssetStyleToCategoryWhereUniqueInput
    update: XOR<AssetStyleToCategoryUpdateWithoutAssetCategoryInput, AssetStyleToCategoryUncheckedUpdateWithoutAssetCategoryInput>
    create: XOR<AssetStyleToCategoryCreateWithoutAssetCategoryInput, AssetStyleToCategoryUncheckedCreateWithoutAssetCategoryInput>
  }

  export type AssetStyleToCategoryUpdateWithWhereUniqueWithoutAssetCategoryInput = {
    where: AssetStyleToCategoryWhereUniqueInput
    data: XOR<AssetStyleToCategoryUpdateWithoutAssetCategoryInput, AssetStyleToCategoryUncheckedUpdateWithoutAssetCategoryInput>
  }

  export type AssetStyleToCategoryUpdateManyWithWhereWithoutAssetCategoryInput = {
    where: AssetStyleToCategoryScalarWhereInput
    data: XOR<AssetStyleToCategoryUpdateManyMutationInput, AssetStyleToCategoryUncheckedUpdateManyWithoutAssetCategoryInput>
  }

  export type AssetStyleToCategoryScalarWhereInput = {
    AND?: AssetStyleToCategoryScalarWhereInput | AssetStyleToCategoryScalarWhereInput[]
    OR?: AssetStyleToCategoryScalarWhereInput[]
    NOT?: AssetStyleToCategoryScalarWhereInput | AssetStyleToCategoryScalarWhereInput[]
    categoryId?: IntFilter<"AssetStyleToCategory"> | number
    styleId?: IntFilter<"AssetStyleToCategory"> | number
    createdAt?: DateTimeFilter<"AssetStyleToCategory"> | Date | string
  }

  export type AssetStyleToCategoryCreateWithoutAssetStyleInput = {
    createdAt?: Date | string
    AssetCategory: AssetCategoryCreateNestedOneWithoutAssetStyleToCategoryInput
  }

  export type AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput = {
    categoryId: number
    createdAt?: Date | string
  }

  export type AssetStyleToCategoryCreateOrConnectWithoutAssetStyleInput = {
    where: AssetStyleToCategoryWhereUniqueInput
    create: XOR<AssetStyleToCategoryCreateWithoutAssetStyleInput, AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput>
  }

  export type AssetStyleToCategoryCreateManyAssetStyleInputEnvelope = {
    data: AssetStyleToCategoryCreateManyAssetStyleInput | AssetStyleToCategoryCreateManyAssetStyleInput[]
    skipDuplicates?: boolean
  }

  export type AssetStyleToCategoryUpsertWithWhereUniqueWithoutAssetStyleInput = {
    where: AssetStyleToCategoryWhereUniqueInput
    update: XOR<AssetStyleToCategoryUpdateWithoutAssetStyleInput, AssetStyleToCategoryUncheckedUpdateWithoutAssetStyleInput>
    create: XOR<AssetStyleToCategoryCreateWithoutAssetStyleInput, AssetStyleToCategoryUncheckedCreateWithoutAssetStyleInput>
  }

  export type AssetStyleToCategoryUpdateWithWhereUniqueWithoutAssetStyleInput = {
    where: AssetStyleToCategoryWhereUniqueInput
    data: XOR<AssetStyleToCategoryUpdateWithoutAssetStyleInput, AssetStyleToCategoryUncheckedUpdateWithoutAssetStyleInput>
  }

  export type AssetStyleToCategoryUpdateManyWithWhereWithoutAssetStyleInput = {
    where: AssetStyleToCategoryScalarWhereInput
    data: XOR<AssetStyleToCategoryUpdateManyMutationInput, AssetStyleToCategoryUncheckedUpdateManyWithoutAssetStyleInput>
  }

  export type AssetCategoryCreateWithoutAssetStyleToCategoryInput = {
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    isDisable?: boolean
    AssetCategory?: AssetCategoryCreateNestedOneWithoutChildCategoryInput
    childCategory?: AssetCategoryCreateNestedManyWithoutAssetCategoryInput
    User?: UserCreateNestedOneWithoutAssetCategoryInput
  }

  export type AssetCategoryUncheckedCreateWithoutAssetStyleToCategoryInput = {
    id?: number
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    parentId?: number | null
    userId?: number | null
    isDisable?: boolean
    childCategory?: AssetCategoryUncheckedCreateNestedManyWithoutAssetCategoryInput
  }

  export type AssetCategoryCreateOrConnectWithoutAssetStyleToCategoryInput = {
    where: AssetCategoryWhereUniqueInput
    create: XOR<AssetCategoryCreateWithoutAssetStyleToCategoryInput, AssetCategoryUncheckedCreateWithoutAssetStyleToCategoryInput>
  }

  export type AssetStyleCreateWithoutAssetStyleToCategoryInput = {
    createdAt?: Date | string
    styleCode: string
    styleName: string
    isDisable?: boolean
  }

  export type AssetStyleUncheckedCreateWithoutAssetStyleToCategoryInput = {
    id?: number
    createdAt?: Date | string
    styleCode: string
    styleName: string
    isDisable?: boolean
  }

  export type AssetStyleCreateOrConnectWithoutAssetStyleToCategoryInput = {
    where: AssetStyleWhereUniqueInput
    create: XOR<AssetStyleCreateWithoutAssetStyleToCategoryInput, AssetStyleUncheckedCreateWithoutAssetStyleToCategoryInput>
  }

  export type AssetCategoryUpsertWithoutAssetStyleToCategoryInput = {
    update: XOR<AssetCategoryUpdateWithoutAssetStyleToCategoryInput, AssetCategoryUncheckedUpdateWithoutAssetStyleToCategoryInput>
    create: XOR<AssetCategoryCreateWithoutAssetStyleToCategoryInput, AssetCategoryUncheckedCreateWithoutAssetStyleToCategoryInput>
    where?: AssetCategoryWhereInput
  }

  export type AssetCategoryUpdateToOneWithWhereWithoutAssetStyleToCategoryInput = {
    where?: AssetCategoryWhereInput
    data: XOR<AssetCategoryUpdateWithoutAssetStyleToCategoryInput, AssetCategoryUncheckedUpdateWithoutAssetStyleToCategoryInput>
  }

  export type AssetCategoryUpdateWithoutAssetStyleToCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    AssetCategory?: AssetCategoryUpdateOneWithoutChildCategoryNestedInput
    childCategory?: AssetCategoryUpdateManyWithoutAssetCategoryNestedInput
    User?: UserUpdateOneWithoutAssetCategoryNestedInput
  }

  export type AssetCategoryUncheckedUpdateWithoutAssetStyleToCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    childCategory?: AssetCategoryUncheckedUpdateManyWithoutAssetCategoryNestedInput
  }

  export type AssetStyleUpsertWithoutAssetStyleToCategoryInput = {
    update: XOR<AssetStyleUpdateWithoutAssetStyleToCategoryInput, AssetStyleUncheckedUpdateWithoutAssetStyleToCategoryInput>
    create: XOR<AssetStyleCreateWithoutAssetStyleToCategoryInput, AssetStyleUncheckedCreateWithoutAssetStyleToCategoryInput>
    where?: AssetStyleWhereInput
  }

  export type AssetStyleUpdateToOneWithWhereWithoutAssetStyleToCategoryInput = {
    where?: AssetStyleWhereInput
    data: XOR<AssetStyleUpdateWithoutAssetStyleToCategoryInput, AssetStyleUncheckedUpdateWithoutAssetStyleToCategoryInput>
  }

  export type AssetStyleUpdateWithoutAssetStyleToCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    styleCode?: StringFieldUpdateOperationsInput | string
    styleName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetStyleUncheckedUpdateWithoutAssetStyleToCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    styleCode?: StringFieldUpdateOperationsInput | string
    styleName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetCategoryCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    parentId?: number | null
    isDisable?: boolean
  }

  export type AssetCategoryUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    AssetCategory?: AssetCategoryUpdateOneWithoutChildCategoryNestedInput
    childCategory?: AssetCategoryUpdateManyWithoutAssetCategoryNestedInput
    AssetStyleToCategory?: AssetStyleToCategoryUpdateManyWithoutAssetCategoryNestedInput
  }

  export type AssetCategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    childCategory?: AssetCategoryUncheckedUpdateManyWithoutAssetCategoryNestedInput
    AssetStyleToCategory?: AssetStyleToCategoryUncheckedUpdateManyWithoutAssetCategoryNestedInput
  }

  export type AssetCategoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetCategoryCreateManyAssetCategoryInput = {
    id?: number
    createdAt?: Date | string
    categoryCode: string
    categoryName: string
    userId?: number | null
    isDisable?: boolean
  }

  export type AssetStyleToCategoryCreateManyAssetCategoryInput = {
    styleId: number
    createdAt?: Date | string
  }

  export type AssetCategoryUpdateWithoutAssetCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    childCategory?: AssetCategoryUpdateManyWithoutAssetCategoryNestedInput
    User?: UserUpdateOneWithoutAssetCategoryNestedInput
    AssetStyleToCategory?: AssetStyleToCategoryUpdateManyWithoutAssetCategoryNestedInput
  }

  export type AssetCategoryUncheckedUpdateWithoutAssetCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    childCategory?: AssetCategoryUncheckedUpdateManyWithoutAssetCategoryNestedInput
    AssetStyleToCategory?: AssetStyleToCategoryUncheckedUpdateManyWithoutAssetCategoryNestedInput
  }

  export type AssetCategoryUncheckedUpdateManyWithoutAssetCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetStyleToCategoryUpdateWithoutAssetCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssetStyle?: AssetStyleUpdateOneRequiredWithoutAssetStyleToCategoryNestedInput
  }

  export type AssetStyleToCategoryUncheckedUpdateWithoutAssetCategoryInput = {
    styleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetStyleToCategoryUncheckedUpdateManyWithoutAssetCategoryInput = {
    styleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetStyleToCategoryCreateManyAssetStyleInput = {
    categoryId: number
    createdAt?: Date | string
  }

  export type AssetStyleToCategoryUpdateWithoutAssetStyleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssetCategory?: AssetCategoryUpdateOneRequiredWithoutAssetStyleToCategoryNestedInput
  }

  export type AssetStyleToCategoryUncheckedUpdateWithoutAssetStyleInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetStyleToCategoryUncheckedUpdateManyWithoutAssetStyleInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetCategoryCountOutputTypeDefaultArgs instead
     */
    export type AssetCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetStyleCountOutputTypeDefaultArgs instead
     */
    export type AssetStyleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetStyleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetCategoryDefaultArgs instead
     */
    export type AssetCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetStyleDefaultArgs instead
     */
    export type AssetStyleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetStyleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetStyleToCategoryDefaultArgs instead
     */
    export type AssetStyleToCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetStyleToCategoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}