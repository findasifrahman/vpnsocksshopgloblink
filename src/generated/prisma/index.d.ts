
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model system_users
 * 
 */
export type system_users = $Result.DefaultSelection<Prisma.$system_usersPayload>
/**
 * Model shawdowsocks_code
 * 
 */
export type shawdowsocks_code = $Result.DefaultSelection<Prisma.$shawdowsocks_codePayload>
/**
 * Model vpn_users
 * 
 */
export type vpn_users = $Result.DefaultSelection<Prisma.$vpn_usersPayload>
/**
 * Model password_protect
 * 
 */
export type password_protect = $Result.DefaultSelection<Prisma.$password_protectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  super_admin: 'super_admin'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more System_users
 * const system_users = await prisma.system_users.findMany()
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
   * // Fetch zero or more System_users
   * const system_users = await prisma.system_users.findMany()
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
   * `prisma.system_users`: Exposes CRUD operations for the **system_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more System_users
    * const system_users = await prisma.system_users.findMany()
    * ```
    */
  get system_users(): Prisma.system_usersDelegate<ExtArgs>;

  /**
   * `prisma.shawdowsocks_code`: Exposes CRUD operations for the **shawdowsocks_code** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shawdowsocks_codes
    * const shawdowsocks_codes = await prisma.shawdowsocks_code.findMany()
    * ```
    */
  get shawdowsocks_code(): Prisma.shawdowsocks_codeDelegate<ExtArgs>;

  /**
   * `prisma.vpn_users`: Exposes CRUD operations for the **vpn_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vpn_users
    * const vpn_users = await prisma.vpn_users.findMany()
    * ```
    */
  get vpn_users(): Prisma.vpn_usersDelegate<ExtArgs>;

  /**
   * `prisma.password_protect`: Exposes CRUD operations for the **password_protect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_protects
    * const password_protects = await prisma.password_protect.findMany()
    * ```
    */
  get password_protect(): Prisma.password_protectDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
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
    system_users: 'system_users',
    shawdowsocks_code: 'shawdowsocks_code',
    vpn_users: 'vpn_users',
    password_protect: 'password_protect'
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
      modelProps: 'system_users' | 'shawdowsocks_code' | 'vpn_users' | 'password_protect'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      system_users: {
        payload: Prisma.$system_usersPayload<ExtArgs>
        fields: Prisma.system_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.system_usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$system_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.system_usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$system_usersPayload>
          }
          findFirst: {
            args: Prisma.system_usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$system_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.system_usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$system_usersPayload>
          }
          findMany: {
            args: Prisma.system_usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$system_usersPayload>[]
          }
          create: {
            args: Prisma.system_usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$system_usersPayload>
          }
          createMany: {
            args: Prisma.system_usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.system_usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$system_usersPayload>
          }
          update: {
            args: Prisma.system_usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$system_usersPayload>
          }
          deleteMany: {
            args: Prisma.system_usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.system_usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.system_usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$system_usersPayload>
          }
          aggregate: {
            args: Prisma.System_usersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystem_users>
          }
          groupBy: {
            args: Prisma.system_usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<System_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.system_usersCountArgs<ExtArgs>,
            result: $Utils.Optional<System_usersCountAggregateOutputType> | number
          }
        }
      }
      shawdowsocks_code: {
        payload: Prisma.$shawdowsocks_codePayload<ExtArgs>
        fields: Prisma.shawdowsocks_codeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shawdowsocks_codeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shawdowsocks_codePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shawdowsocks_codeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shawdowsocks_codePayload>
          }
          findFirst: {
            args: Prisma.shawdowsocks_codeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shawdowsocks_codePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shawdowsocks_codeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shawdowsocks_codePayload>
          }
          findMany: {
            args: Prisma.shawdowsocks_codeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shawdowsocks_codePayload>[]
          }
          create: {
            args: Prisma.shawdowsocks_codeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shawdowsocks_codePayload>
          }
          createMany: {
            args: Prisma.shawdowsocks_codeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.shawdowsocks_codeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shawdowsocks_codePayload>
          }
          update: {
            args: Prisma.shawdowsocks_codeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shawdowsocks_codePayload>
          }
          deleteMany: {
            args: Prisma.shawdowsocks_codeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.shawdowsocks_codeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.shawdowsocks_codeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shawdowsocks_codePayload>
          }
          aggregate: {
            args: Prisma.Shawdowsocks_codeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShawdowsocks_code>
          }
          groupBy: {
            args: Prisma.shawdowsocks_codeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Shawdowsocks_codeGroupByOutputType>[]
          }
          count: {
            args: Prisma.shawdowsocks_codeCountArgs<ExtArgs>,
            result: $Utils.Optional<Shawdowsocks_codeCountAggregateOutputType> | number
          }
        }
      }
      vpn_users: {
        payload: Prisma.$vpn_usersPayload<ExtArgs>
        fields: Prisma.vpn_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vpn_usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vpn_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vpn_usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vpn_usersPayload>
          }
          findFirst: {
            args: Prisma.vpn_usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vpn_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vpn_usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vpn_usersPayload>
          }
          findMany: {
            args: Prisma.vpn_usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vpn_usersPayload>[]
          }
          create: {
            args: Prisma.vpn_usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vpn_usersPayload>
          }
          createMany: {
            args: Prisma.vpn_usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.vpn_usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vpn_usersPayload>
          }
          update: {
            args: Prisma.vpn_usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vpn_usersPayload>
          }
          deleteMany: {
            args: Prisma.vpn_usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.vpn_usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.vpn_usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vpn_usersPayload>
          }
          aggregate: {
            args: Prisma.Vpn_usersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVpn_users>
          }
          groupBy: {
            args: Prisma.vpn_usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Vpn_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.vpn_usersCountArgs<ExtArgs>,
            result: $Utils.Optional<Vpn_usersCountAggregateOutputType> | number
          }
        }
      }
      password_protect: {
        payload: Prisma.$password_protectPayload<ExtArgs>
        fields: Prisma.password_protectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_protectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$password_protectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_protectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$password_protectPayload>
          }
          findFirst: {
            args: Prisma.password_protectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$password_protectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_protectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$password_protectPayload>
          }
          findMany: {
            args: Prisma.password_protectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$password_protectPayload>[]
          }
          create: {
            args: Prisma.password_protectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$password_protectPayload>
          }
          createMany: {
            args: Prisma.password_protectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.password_protectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$password_protectPayload>
          }
          update: {
            args: Prisma.password_protectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$password_protectPayload>
          }
          deleteMany: {
            args: Prisma.password_protectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.password_protectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.password_protectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$password_protectPayload>
          }
          aggregate: {
            args: Prisma.Password_protectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePassword_protect>
          }
          groupBy: {
            args: Prisma.password_protectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Password_protectGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_protectCountArgs<ExtArgs>,
            result: $Utils.Optional<Password_protectCountAggregateOutputType> | number
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
   * Count Type Shawdowsocks_codeCountOutputType
   */

  export type Shawdowsocks_codeCountOutputType = {
    vpn_users: number
  }

  export type Shawdowsocks_codeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vpn_users?: boolean | Shawdowsocks_codeCountOutputTypeCountVpn_usersArgs
  }

  // Custom InputTypes

  /**
   * Shawdowsocks_codeCountOutputType without action
   */
  export type Shawdowsocks_codeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shawdowsocks_codeCountOutputType
     */
    select?: Shawdowsocks_codeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Shawdowsocks_codeCountOutputType without action
   */
  export type Shawdowsocks_codeCountOutputTypeCountVpn_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vpn_usersWhereInput
  }



  /**
   * Models
   */

  /**
   * Model system_users
   */

  export type AggregateSystem_users = {
    _count: System_usersCountAggregateOutputType | null
    _min: System_usersMinAggregateOutputType | null
    _max: System_usersMaxAggregateOutputType | null
  }

  export type System_usersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    last_login: Date | null
    password: string | null
    role: $Enums.Role | null
  }

  export type System_usersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    last_login: Date | null
    password: string | null
    role: $Enums.Role | null
  }

  export type System_usersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    last_login: number
    password: number
    role: number
    _all: number
  }


  export type System_usersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    last_login?: true
    password?: true
    role?: true
  }

  export type System_usersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    last_login?: true
    password?: true
    role?: true
  }

  export type System_usersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    last_login?: true
    password?: true
    role?: true
    _all?: true
  }

  export type System_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which system_users to aggregate.
     */
    where?: system_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_users to fetch.
     */
    orderBy?: system_usersOrderByWithRelationInput | system_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: system_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned system_users
    **/
    _count?: true | System_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: System_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: System_usersMaxAggregateInputType
  }

  export type GetSystem_usersAggregateType<T extends System_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateSystem_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystem_users[P]>
      : GetScalarType<T[P], AggregateSystem_users[P]>
  }




  export type system_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: system_usersWhereInput
    orderBy?: system_usersOrderByWithAggregationInput | system_usersOrderByWithAggregationInput[]
    by: System_usersScalarFieldEnum[] | System_usersScalarFieldEnum
    having?: system_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: System_usersCountAggregateInputType | true
    _min?: System_usersMinAggregateInputType
    _max?: System_usersMaxAggregateInputType
  }

  export type System_usersGroupByOutputType = {
    id: string
    name: string
    email: string
    last_login: Date | null
    password: string
    role: $Enums.Role
    _count: System_usersCountAggregateOutputType | null
    _min: System_usersMinAggregateOutputType | null
    _max: System_usersMaxAggregateOutputType | null
  }

  type GetSystem_usersGroupByPayload<T extends system_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<System_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof System_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], System_usersGroupByOutputType[P]>
            : GetScalarType<T[P], System_usersGroupByOutputType[P]>
        }
      >
    >


  export type system_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    last_login?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["system_users"]>

  export type system_usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    last_login?: boolean
    password?: boolean
    role?: boolean
  }


  export type $system_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "system_users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      last_login: Date | null
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["system_users"]>
    composites: {}
  }


  type system_usersGetPayload<S extends boolean | null | undefined | system_usersDefaultArgs> = $Result.GetResult<Prisma.$system_usersPayload, S>

  type system_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<system_usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: System_usersCountAggregateInputType | true
    }

  export interface system_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['system_users'], meta: { name: 'system_users' } }
    /**
     * Find zero or one System_users that matches the filter.
     * @param {system_usersFindUniqueArgs} args - Arguments to find a System_users
     * @example
     * // Get one System_users
     * const system_users = await prisma.system_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends system_usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, system_usersFindUniqueArgs<ExtArgs>>
    ): Prisma__system_usersClient<$Result.GetResult<Prisma.$system_usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one System_users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {system_usersFindUniqueOrThrowArgs} args - Arguments to find a System_users
     * @example
     * // Get one System_users
     * const system_users = await prisma.system_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends system_usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, system_usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__system_usersClient<$Result.GetResult<Prisma.$system_usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first System_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_usersFindFirstArgs} args - Arguments to find a System_users
     * @example
     * // Get one System_users
     * const system_users = await prisma.system_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends system_usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, system_usersFindFirstArgs<ExtArgs>>
    ): Prisma__system_usersClient<$Result.GetResult<Prisma.$system_usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first System_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_usersFindFirstOrThrowArgs} args - Arguments to find a System_users
     * @example
     * // Get one System_users
     * const system_users = await prisma.system_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends system_usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, system_usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__system_usersClient<$Result.GetResult<Prisma.$system_usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more System_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all System_users
     * const system_users = await prisma.system_users.findMany()
     * 
     * // Get first 10 System_users
     * const system_users = await prisma.system_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const system_usersWithIdOnly = await prisma.system_users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends system_usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, system_usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$system_usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a System_users.
     * @param {system_usersCreateArgs} args - Arguments to create a System_users.
     * @example
     * // Create one System_users
     * const System_users = await prisma.system_users.create({
     *   data: {
     *     // ... data to create a System_users
     *   }
     * })
     * 
    **/
    create<T extends system_usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, system_usersCreateArgs<ExtArgs>>
    ): Prisma__system_usersClient<$Result.GetResult<Prisma.$system_usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many System_users.
     *     @param {system_usersCreateManyArgs} args - Arguments to create many System_users.
     *     @example
     *     // Create many System_users
     *     const system_users = await prisma.system_users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends system_usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, system_usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a System_users.
     * @param {system_usersDeleteArgs} args - Arguments to delete one System_users.
     * @example
     * // Delete one System_users
     * const System_users = await prisma.system_users.delete({
     *   where: {
     *     // ... filter to delete one System_users
     *   }
     * })
     * 
    **/
    delete<T extends system_usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, system_usersDeleteArgs<ExtArgs>>
    ): Prisma__system_usersClient<$Result.GetResult<Prisma.$system_usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one System_users.
     * @param {system_usersUpdateArgs} args - Arguments to update one System_users.
     * @example
     * // Update one System_users
     * const system_users = await prisma.system_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends system_usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, system_usersUpdateArgs<ExtArgs>>
    ): Prisma__system_usersClient<$Result.GetResult<Prisma.$system_usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more System_users.
     * @param {system_usersDeleteManyArgs} args - Arguments to filter System_users to delete.
     * @example
     * // Delete a few System_users
     * const { count } = await prisma.system_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends system_usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, system_usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more System_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many System_users
     * const system_users = await prisma.system_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends system_usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, system_usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one System_users.
     * @param {system_usersUpsertArgs} args - Arguments to update or create a System_users.
     * @example
     * // Update or create a System_users
     * const system_users = await prisma.system_users.upsert({
     *   create: {
     *     // ... data to create a System_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the System_users we want to update
     *   }
     * })
    **/
    upsert<T extends system_usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, system_usersUpsertArgs<ExtArgs>>
    ): Prisma__system_usersClient<$Result.GetResult<Prisma.$system_usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of System_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_usersCountArgs} args - Arguments to filter System_users to count.
     * @example
     * // Count the number of System_users
     * const count = await prisma.system_users.count({
     *   where: {
     *     // ... the filter for the System_users we want to count
     *   }
     * })
    **/
    count<T extends system_usersCountArgs>(
      args?: Subset<T, system_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], System_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a System_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends System_usersAggregateArgs>(args: Subset<T, System_usersAggregateArgs>): Prisma.PrismaPromise<GetSystem_usersAggregateType<T>>

    /**
     * Group by System_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_usersGroupByArgs} args - Group by arguments.
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
      T extends system_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: system_usersGroupByArgs['orderBy'] }
        : { orderBy?: system_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, system_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystem_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the system_users model
   */
  readonly fields: system_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for system_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__system_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the system_users model
   */ 
  interface system_usersFieldRefs {
    readonly id: FieldRef<"system_users", 'String'>
    readonly name: FieldRef<"system_users", 'String'>
    readonly email: FieldRef<"system_users", 'String'>
    readonly last_login: FieldRef<"system_users", 'DateTime'>
    readonly password: FieldRef<"system_users", 'String'>
    readonly role: FieldRef<"system_users", 'Role'>
  }
    

  // Custom InputTypes

  /**
   * system_users findUnique
   */
  export type system_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_users
     */
    select?: system_usersSelect<ExtArgs> | null
    /**
     * Filter, which system_users to fetch.
     */
    where: system_usersWhereUniqueInput
  }


  /**
   * system_users findUniqueOrThrow
   */
  export type system_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_users
     */
    select?: system_usersSelect<ExtArgs> | null
    /**
     * Filter, which system_users to fetch.
     */
    where: system_usersWhereUniqueInput
  }


  /**
   * system_users findFirst
   */
  export type system_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_users
     */
    select?: system_usersSelect<ExtArgs> | null
    /**
     * Filter, which system_users to fetch.
     */
    where?: system_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_users to fetch.
     */
    orderBy?: system_usersOrderByWithRelationInput | system_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for system_users.
     */
    cursor?: system_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of system_users.
     */
    distinct?: System_usersScalarFieldEnum | System_usersScalarFieldEnum[]
  }


  /**
   * system_users findFirstOrThrow
   */
  export type system_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_users
     */
    select?: system_usersSelect<ExtArgs> | null
    /**
     * Filter, which system_users to fetch.
     */
    where?: system_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_users to fetch.
     */
    orderBy?: system_usersOrderByWithRelationInput | system_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for system_users.
     */
    cursor?: system_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of system_users.
     */
    distinct?: System_usersScalarFieldEnum | System_usersScalarFieldEnum[]
  }


  /**
   * system_users findMany
   */
  export type system_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_users
     */
    select?: system_usersSelect<ExtArgs> | null
    /**
     * Filter, which system_users to fetch.
     */
    where?: system_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_users to fetch.
     */
    orderBy?: system_usersOrderByWithRelationInput | system_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing system_users.
     */
    cursor?: system_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_users.
     */
    skip?: number
    distinct?: System_usersScalarFieldEnum | System_usersScalarFieldEnum[]
  }


  /**
   * system_users create
   */
  export type system_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_users
     */
    select?: system_usersSelect<ExtArgs> | null
    /**
     * The data needed to create a system_users.
     */
    data: XOR<system_usersCreateInput, system_usersUncheckedCreateInput>
  }


  /**
   * system_users createMany
   */
  export type system_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many system_users.
     */
    data: system_usersCreateManyInput | system_usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * system_users update
   */
  export type system_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_users
     */
    select?: system_usersSelect<ExtArgs> | null
    /**
     * The data needed to update a system_users.
     */
    data: XOR<system_usersUpdateInput, system_usersUncheckedUpdateInput>
    /**
     * Choose, which system_users to update.
     */
    where: system_usersWhereUniqueInput
  }


  /**
   * system_users updateMany
   */
  export type system_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update system_users.
     */
    data: XOR<system_usersUpdateManyMutationInput, system_usersUncheckedUpdateManyInput>
    /**
     * Filter which system_users to update
     */
    where?: system_usersWhereInput
  }


  /**
   * system_users upsert
   */
  export type system_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_users
     */
    select?: system_usersSelect<ExtArgs> | null
    /**
     * The filter to search for the system_users to update in case it exists.
     */
    where: system_usersWhereUniqueInput
    /**
     * In case the system_users found by the `where` argument doesn't exist, create a new system_users with this data.
     */
    create: XOR<system_usersCreateInput, system_usersUncheckedCreateInput>
    /**
     * In case the system_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<system_usersUpdateInput, system_usersUncheckedUpdateInput>
  }


  /**
   * system_users delete
   */
  export type system_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_users
     */
    select?: system_usersSelect<ExtArgs> | null
    /**
     * Filter which system_users to delete.
     */
    where: system_usersWhereUniqueInput
  }


  /**
   * system_users deleteMany
   */
  export type system_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which system_users to delete
     */
    where?: system_usersWhereInput
  }


  /**
   * system_users without action
   */
  export type system_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_users
     */
    select?: system_usersSelect<ExtArgs> | null
  }



  /**
   * Model shawdowsocks_code
   */

  export type AggregateShawdowsocks_code = {
    _count: Shawdowsocks_codeCountAggregateOutputType | null
    _avg: Shawdowsocks_codeAvgAggregateOutputType | null
    _sum: Shawdowsocks_codeSumAggregateOutputType | null
    _min: Shawdowsocks_codeMinAggregateOutputType | null
    _max: Shawdowsocks_codeMaxAggregateOutputType | null
  }

  export type Shawdowsocks_codeAvgAggregateOutputType = {
    code_usage_count: number | null
    code_max_usage: number | null
    total_data: number | null
    data_left: number | null
  }

  export type Shawdowsocks_codeSumAggregateOutputType = {
    code_usage_count: number | null
    code_max_usage: number | null
    total_data: bigint | null
    data_left: bigint | null
  }

  export type Shawdowsocks_codeMinAggregateOutputType = {
    vpn_id: string | null
    main_link: string | null
    alternative_link: string | null
    mirror1: string | null
    mirror2: string | null
    code_usage_count: number | null
    code_max_usage: number | null
    total_data: bigint | null
    valid_upto: Date | null
    created_at: Date | null
    data_left: bigint | null
    password: string | null
  }

  export type Shawdowsocks_codeMaxAggregateOutputType = {
    vpn_id: string | null
    main_link: string | null
    alternative_link: string | null
    mirror1: string | null
    mirror2: string | null
    code_usage_count: number | null
    code_max_usage: number | null
    total_data: bigint | null
    valid_upto: Date | null
    created_at: Date | null
    data_left: bigint | null
    password: string | null
  }

  export type Shawdowsocks_codeCountAggregateOutputType = {
    vpn_id: number
    main_link: number
    alternative_link: number
    mirror1: number
    mirror2: number
    code_usage_count: number
    code_max_usage: number
    total_data: number
    valid_upto: number
    created_at: number
    data_left: number
    password: number
    _all: number
  }


  export type Shawdowsocks_codeAvgAggregateInputType = {
    code_usage_count?: true
    code_max_usage?: true
    total_data?: true
    data_left?: true
  }

  export type Shawdowsocks_codeSumAggregateInputType = {
    code_usage_count?: true
    code_max_usage?: true
    total_data?: true
    data_left?: true
  }

  export type Shawdowsocks_codeMinAggregateInputType = {
    vpn_id?: true
    main_link?: true
    alternative_link?: true
    mirror1?: true
    mirror2?: true
    code_usage_count?: true
    code_max_usage?: true
    total_data?: true
    valid_upto?: true
    created_at?: true
    data_left?: true
    password?: true
  }

  export type Shawdowsocks_codeMaxAggregateInputType = {
    vpn_id?: true
    main_link?: true
    alternative_link?: true
    mirror1?: true
    mirror2?: true
    code_usage_count?: true
    code_max_usage?: true
    total_data?: true
    valid_upto?: true
    created_at?: true
    data_left?: true
    password?: true
  }

  export type Shawdowsocks_codeCountAggregateInputType = {
    vpn_id?: true
    main_link?: true
    alternative_link?: true
    mirror1?: true
    mirror2?: true
    code_usage_count?: true
    code_max_usage?: true
    total_data?: true
    valid_upto?: true
    created_at?: true
    data_left?: true
    password?: true
    _all?: true
  }

  export type Shawdowsocks_codeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shawdowsocks_code to aggregate.
     */
    where?: shawdowsocks_codeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shawdowsocks_codes to fetch.
     */
    orderBy?: shawdowsocks_codeOrderByWithRelationInput | shawdowsocks_codeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shawdowsocks_codeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shawdowsocks_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shawdowsocks_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shawdowsocks_codes
    **/
    _count?: true | Shawdowsocks_codeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shawdowsocks_codeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shawdowsocks_codeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shawdowsocks_codeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shawdowsocks_codeMaxAggregateInputType
  }

  export type GetShawdowsocks_codeAggregateType<T extends Shawdowsocks_codeAggregateArgs> = {
        [P in keyof T & keyof AggregateShawdowsocks_code]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShawdowsocks_code[P]>
      : GetScalarType<T[P], AggregateShawdowsocks_code[P]>
  }




  export type shawdowsocks_codeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shawdowsocks_codeWhereInput
    orderBy?: shawdowsocks_codeOrderByWithAggregationInput | shawdowsocks_codeOrderByWithAggregationInput[]
    by: Shawdowsocks_codeScalarFieldEnum[] | Shawdowsocks_codeScalarFieldEnum
    having?: shawdowsocks_codeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shawdowsocks_codeCountAggregateInputType | true
    _avg?: Shawdowsocks_codeAvgAggregateInputType
    _sum?: Shawdowsocks_codeSumAggregateInputType
    _min?: Shawdowsocks_codeMinAggregateInputType
    _max?: Shawdowsocks_codeMaxAggregateInputType
  }

  export type Shawdowsocks_codeGroupByOutputType = {
    vpn_id: string
    main_link: string
    alternative_link: string | null
    mirror1: string | null
    mirror2: string | null
    code_usage_count: number
    code_max_usage: number
    total_data: bigint
    valid_upto: Date
    created_at: Date
    data_left: bigint
    password: string
    _count: Shawdowsocks_codeCountAggregateOutputType | null
    _avg: Shawdowsocks_codeAvgAggregateOutputType | null
    _sum: Shawdowsocks_codeSumAggregateOutputType | null
    _min: Shawdowsocks_codeMinAggregateOutputType | null
    _max: Shawdowsocks_codeMaxAggregateOutputType | null
  }

  type GetShawdowsocks_codeGroupByPayload<T extends shawdowsocks_codeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shawdowsocks_codeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shawdowsocks_codeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shawdowsocks_codeGroupByOutputType[P]>
            : GetScalarType<T[P], Shawdowsocks_codeGroupByOutputType[P]>
        }
      >
    >


  export type shawdowsocks_codeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vpn_id?: boolean
    main_link?: boolean
    alternative_link?: boolean
    mirror1?: boolean
    mirror2?: boolean
    code_usage_count?: boolean
    code_max_usage?: boolean
    total_data?: boolean
    valid_upto?: boolean
    created_at?: boolean
    data_left?: boolean
    password?: boolean
    vpn_users?: boolean | shawdowsocks_code$vpn_usersArgs<ExtArgs>
    _count?: boolean | Shawdowsocks_codeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shawdowsocks_code"]>

  export type shawdowsocks_codeSelectScalar = {
    vpn_id?: boolean
    main_link?: boolean
    alternative_link?: boolean
    mirror1?: boolean
    mirror2?: boolean
    code_usage_count?: boolean
    code_max_usage?: boolean
    total_data?: boolean
    valid_upto?: boolean
    created_at?: boolean
    data_left?: boolean
    password?: boolean
  }

  export type shawdowsocks_codeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vpn_users?: boolean | shawdowsocks_code$vpn_usersArgs<ExtArgs>
    _count?: boolean | Shawdowsocks_codeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $shawdowsocks_codePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shawdowsocks_code"
    objects: {
      vpn_users: Prisma.$vpn_usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vpn_id: string
      main_link: string
      alternative_link: string | null
      mirror1: string | null
      mirror2: string | null
      code_usage_count: number
      code_max_usage: number
      total_data: bigint
      valid_upto: Date
      created_at: Date
      data_left: bigint
      password: string
    }, ExtArgs["result"]["shawdowsocks_code"]>
    composites: {}
  }


  type shawdowsocks_codeGetPayload<S extends boolean | null | undefined | shawdowsocks_codeDefaultArgs> = $Result.GetResult<Prisma.$shawdowsocks_codePayload, S>

  type shawdowsocks_codeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<shawdowsocks_codeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Shawdowsocks_codeCountAggregateInputType | true
    }

  export interface shawdowsocks_codeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shawdowsocks_code'], meta: { name: 'shawdowsocks_code' } }
    /**
     * Find zero or one Shawdowsocks_code that matches the filter.
     * @param {shawdowsocks_codeFindUniqueArgs} args - Arguments to find a Shawdowsocks_code
     * @example
     * // Get one Shawdowsocks_code
     * const shawdowsocks_code = await prisma.shawdowsocks_code.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends shawdowsocks_codeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, shawdowsocks_codeFindUniqueArgs<ExtArgs>>
    ): Prisma__shawdowsocks_codeClient<$Result.GetResult<Prisma.$shawdowsocks_codePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Shawdowsocks_code that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {shawdowsocks_codeFindUniqueOrThrowArgs} args - Arguments to find a Shawdowsocks_code
     * @example
     * // Get one Shawdowsocks_code
     * const shawdowsocks_code = await prisma.shawdowsocks_code.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends shawdowsocks_codeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, shawdowsocks_codeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__shawdowsocks_codeClient<$Result.GetResult<Prisma.$shawdowsocks_codePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Shawdowsocks_code that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shawdowsocks_codeFindFirstArgs} args - Arguments to find a Shawdowsocks_code
     * @example
     * // Get one Shawdowsocks_code
     * const shawdowsocks_code = await prisma.shawdowsocks_code.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends shawdowsocks_codeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, shawdowsocks_codeFindFirstArgs<ExtArgs>>
    ): Prisma__shawdowsocks_codeClient<$Result.GetResult<Prisma.$shawdowsocks_codePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Shawdowsocks_code that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shawdowsocks_codeFindFirstOrThrowArgs} args - Arguments to find a Shawdowsocks_code
     * @example
     * // Get one Shawdowsocks_code
     * const shawdowsocks_code = await prisma.shawdowsocks_code.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends shawdowsocks_codeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, shawdowsocks_codeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__shawdowsocks_codeClient<$Result.GetResult<Prisma.$shawdowsocks_codePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Shawdowsocks_codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shawdowsocks_codeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shawdowsocks_codes
     * const shawdowsocks_codes = await prisma.shawdowsocks_code.findMany()
     * 
     * // Get first 10 Shawdowsocks_codes
     * const shawdowsocks_codes = await prisma.shawdowsocks_code.findMany({ take: 10 })
     * 
     * // Only select the `vpn_id`
     * const shawdowsocks_codeWithVpn_idOnly = await prisma.shawdowsocks_code.findMany({ select: { vpn_id: true } })
     * 
    **/
    findMany<T extends shawdowsocks_codeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, shawdowsocks_codeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shawdowsocks_codePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Shawdowsocks_code.
     * @param {shawdowsocks_codeCreateArgs} args - Arguments to create a Shawdowsocks_code.
     * @example
     * // Create one Shawdowsocks_code
     * const Shawdowsocks_code = await prisma.shawdowsocks_code.create({
     *   data: {
     *     // ... data to create a Shawdowsocks_code
     *   }
     * })
     * 
    **/
    create<T extends shawdowsocks_codeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, shawdowsocks_codeCreateArgs<ExtArgs>>
    ): Prisma__shawdowsocks_codeClient<$Result.GetResult<Prisma.$shawdowsocks_codePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Shawdowsocks_codes.
     *     @param {shawdowsocks_codeCreateManyArgs} args - Arguments to create many Shawdowsocks_codes.
     *     @example
     *     // Create many Shawdowsocks_codes
     *     const shawdowsocks_code = await prisma.shawdowsocks_code.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends shawdowsocks_codeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, shawdowsocks_codeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shawdowsocks_code.
     * @param {shawdowsocks_codeDeleteArgs} args - Arguments to delete one Shawdowsocks_code.
     * @example
     * // Delete one Shawdowsocks_code
     * const Shawdowsocks_code = await prisma.shawdowsocks_code.delete({
     *   where: {
     *     // ... filter to delete one Shawdowsocks_code
     *   }
     * })
     * 
    **/
    delete<T extends shawdowsocks_codeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, shawdowsocks_codeDeleteArgs<ExtArgs>>
    ): Prisma__shawdowsocks_codeClient<$Result.GetResult<Prisma.$shawdowsocks_codePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Shawdowsocks_code.
     * @param {shawdowsocks_codeUpdateArgs} args - Arguments to update one Shawdowsocks_code.
     * @example
     * // Update one Shawdowsocks_code
     * const shawdowsocks_code = await prisma.shawdowsocks_code.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends shawdowsocks_codeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, shawdowsocks_codeUpdateArgs<ExtArgs>>
    ): Prisma__shawdowsocks_codeClient<$Result.GetResult<Prisma.$shawdowsocks_codePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Shawdowsocks_codes.
     * @param {shawdowsocks_codeDeleteManyArgs} args - Arguments to filter Shawdowsocks_codes to delete.
     * @example
     * // Delete a few Shawdowsocks_codes
     * const { count } = await prisma.shawdowsocks_code.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends shawdowsocks_codeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, shawdowsocks_codeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shawdowsocks_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shawdowsocks_codeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shawdowsocks_codes
     * const shawdowsocks_code = await prisma.shawdowsocks_code.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends shawdowsocks_codeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, shawdowsocks_codeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shawdowsocks_code.
     * @param {shawdowsocks_codeUpsertArgs} args - Arguments to update or create a Shawdowsocks_code.
     * @example
     * // Update or create a Shawdowsocks_code
     * const shawdowsocks_code = await prisma.shawdowsocks_code.upsert({
     *   create: {
     *     // ... data to create a Shawdowsocks_code
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shawdowsocks_code we want to update
     *   }
     * })
    **/
    upsert<T extends shawdowsocks_codeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, shawdowsocks_codeUpsertArgs<ExtArgs>>
    ): Prisma__shawdowsocks_codeClient<$Result.GetResult<Prisma.$shawdowsocks_codePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Shawdowsocks_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shawdowsocks_codeCountArgs} args - Arguments to filter Shawdowsocks_codes to count.
     * @example
     * // Count the number of Shawdowsocks_codes
     * const count = await prisma.shawdowsocks_code.count({
     *   where: {
     *     // ... the filter for the Shawdowsocks_codes we want to count
     *   }
     * })
    **/
    count<T extends shawdowsocks_codeCountArgs>(
      args?: Subset<T, shawdowsocks_codeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shawdowsocks_codeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shawdowsocks_code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shawdowsocks_codeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Shawdowsocks_codeAggregateArgs>(args: Subset<T, Shawdowsocks_codeAggregateArgs>): Prisma.PrismaPromise<GetShawdowsocks_codeAggregateType<T>>

    /**
     * Group by Shawdowsocks_code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shawdowsocks_codeGroupByArgs} args - Group by arguments.
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
      T extends shawdowsocks_codeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shawdowsocks_codeGroupByArgs['orderBy'] }
        : { orderBy?: shawdowsocks_codeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, shawdowsocks_codeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShawdowsocks_codeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shawdowsocks_code model
   */
  readonly fields: shawdowsocks_codeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shawdowsocks_code.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shawdowsocks_codeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    vpn_users<T extends shawdowsocks_code$vpn_usersArgs<ExtArgs> = {}>(args?: Subset<T, shawdowsocks_code$vpn_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vpn_usersPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the shawdowsocks_code model
   */ 
  interface shawdowsocks_codeFieldRefs {
    readonly vpn_id: FieldRef<"shawdowsocks_code", 'String'>
    readonly main_link: FieldRef<"shawdowsocks_code", 'String'>
    readonly alternative_link: FieldRef<"shawdowsocks_code", 'String'>
    readonly mirror1: FieldRef<"shawdowsocks_code", 'String'>
    readonly mirror2: FieldRef<"shawdowsocks_code", 'String'>
    readonly code_usage_count: FieldRef<"shawdowsocks_code", 'Int'>
    readonly code_max_usage: FieldRef<"shawdowsocks_code", 'Int'>
    readonly total_data: FieldRef<"shawdowsocks_code", 'BigInt'>
    readonly valid_upto: FieldRef<"shawdowsocks_code", 'DateTime'>
    readonly created_at: FieldRef<"shawdowsocks_code", 'DateTime'>
    readonly data_left: FieldRef<"shawdowsocks_code", 'BigInt'>
    readonly password: FieldRef<"shawdowsocks_code", 'String'>
  }
    

  // Custom InputTypes

  /**
   * shawdowsocks_code findUnique
   */
  export type shawdowsocks_codeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shawdowsocks_code
     */
    select?: shawdowsocks_codeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: shawdowsocks_codeInclude<ExtArgs> | null
    /**
     * Filter, which shawdowsocks_code to fetch.
     */
    where: shawdowsocks_codeWhereUniqueInput
  }


  /**
   * shawdowsocks_code findUniqueOrThrow
   */
  export type shawdowsocks_codeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shawdowsocks_code
     */
    select?: shawdowsocks_codeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: shawdowsocks_codeInclude<ExtArgs> | null
    /**
     * Filter, which shawdowsocks_code to fetch.
     */
    where: shawdowsocks_codeWhereUniqueInput
  }


  /**
   * shawdowsocks_code findFirst
   */
  export type shawdowsocks_codeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shawdowsocks_code
     */
    select?: shawdowsocks_codeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: shawdowsocks_codeInclude<ExtArgs> | null
    /**
     * Filter, which shawdowsocks_code to fetch.
     */
    where?: shawdowsocks_codeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shawdowsocks_codes to fetch.
     */
    orderBy?: shawdowsocks_codeOrderByWithRelationInput | shawdowsocks_codeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shawdowsocks_codes.
     */
    cursor?: shawdowsocks_codeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shawdowsocks_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shawdowsocks_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shawdowsocks_codes.
     */
    distinct?: Shawdowsocks_codeScalarFieldEnum | Shawdowsocks_codeScalarFieldEnum[]
  }


  /**
   * shawdowsocks_code findFirstOrThrow
   */
  export type shawdowsocks_codeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shawdowsocks_code
     */
    select?: shawdowsocks_codeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: shawdowsocks_codeInclude<ExtArgs> | null
    /**
     * Filter, which shawdowsocks_code to fetch.
     */
    where?: shawdowsocks_codeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shawdowsocks_codes to fetch.
     */
    orderBy?: shawdowsocks_codeOrderByWithRelationInput | shawdowsocks_codeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shawdowsocks_codes.
     */
    cursor?: shawdowsocks_codeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shawdowsocks_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shawdowsocks_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shawdowsocks_codes.
     */
    distinct?: Shawdowsocks_codeScalarFieldEnum | Shawdowsocks_codeScalarFieldEnum[]
  }


  /**
   * shawdowsocks_code findMany
   */
  export type shawdowsocks_codeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shawdowsocks_code
     */
    select?: shawdowsocks_codeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: shawdowsocks_codeInclude<ExtArgs> | null
    /**
     * Filter, which shawdowsocks_codes to fetch.
     */
    where?: shawdowsocks_codeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shawdowsocks_codes to fetch.
     */
    orderBy?: shawdowsocks_codeOrderByWithRelationInput | shawdowsocks_codeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shawdowsocks_codes.
     */
    cursor?: shawdowsocks_codeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shawdowsocks_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shawdowsocks_codes.
     */
    skip?: number
    distinct?: Shawdowsocks_codeScalarFieldEnum | Shawdowsocks_codeScalarFieldEnum[]
  }


  /**
   * shawdowsocks_code create
   */
  export type shawdowsocks_codeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shawdowsocks_code
     */
    select?: shawdowsocks_codeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: shawdowsocks_codeInclude<ExtArgs> | null
    /**
     * The data needed to create a shawdowsocks_code.
     */
    data: XOR<shawdowsocks_codeCreateInput, shawdowsocks_codeUncheckedCreateInput>
  }


  /**
   * shawdowsocks_code createMany
   */
  export type shawdowsocks_codeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shawdowsocks_codes.
     */
    data: shawdowsocks_codeCreateManyInput | shawdowsocks_codeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * shawdowsocks_code update
   */
  export type shawdowsocks_codeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shawdowsocks_code
     */
    select?: shawdowsocks_codeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: shawdowsocks_codeInclude<ExtArgs> | null
    /**
     * The data needed to update a shawdowsocks_code.
     */
    data: XOR<shawdowsocks_codeUpdateInput, shawdowsocks_codeUncheckedUpdateInput>
    /**
     * Choose, which shawdowsocks_code to update.
     */
    where: shawdowsocks_codeWhereUniqueInput
  }


  /**
   * shawdowsocks_code updateMany
   */
  export type shawdowsocks_codeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shawdowsocks_codes.
     */
    data: XOR<shawdowsocks_codeUpdateManyMutationInput, shawdowsocks_codeUncheckedUpdateManyInput>
    /**
     * Filter which shawdowsocks_codes to update
     */
    where?: shawdowsocks_codeWhereInput
  }


  /**
   * shawdowsocks_code upsert
   */
  export type shawdowsocks_codeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shawdowsocks_code
     */
    select?: shawdowsocks_codeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: shawdowsocks_codeInclude<ExtArgs> | null
    /**
     * The filter to search for the shawdowsocks_code to update in case it exists.
     */
    where: shawdowsocks_codeWhereUniqueInput
    /**
     * In case the shawdowsocks_code found by the `where` argument doesn't exist, create a new shawdowsocks_code with this data.
     */
    create: XOR<shawdowsocks_codeCreateInput, shawdowsocks_codeUncheckedCreateInput>
    /**
     * In case the shawdowsocks_code was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shawdowsocks_codeUpdateInput, shawdowsocks_codeUncheckedUpdateInput>
  }


  /**
   * shawdowsocks_code delete
   */
  export type shawdowsocks_codeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shawdowsocks_code
     */
    select?: shawdowsocks_codeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: shawdowsocks_codeInclude<ExtArgs> | null
    /**
     * Filter which shawdowsocks_code to delete.
     */
    where: shawdowsocks_codeWhereUniqueInput
  }


  /**
   * shawdowsocks_code deleteMany
   */
  export type shawdowsocks_codeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shawdowsocks_codes to delete
     */
    where?: shawdowsocks_codeWhereInput
  }


  /**
   * shawdowsocks_code.vpn_users
   */
  export type shawdowsocks_code$vpn_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
    where?: vpn_usersWhereInput
    orderBy?: vpn_usersOrderByWithRelationInput | vpn_usersOrderByWithRelationInput[]
    cursor?: vpn_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vpn_usersScalarFieldEnum | Vpn_usersScalarFieldEnum[]
  }


  /**
   * shawdowsocks_code without action
   */
  export type shawdowsocks_codeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shawdowsocks_code
     */
    select?: shawdowsocks_codeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: shawdowsocks_codeInclude<ExtArgs> | null
  }



  /**
   * Model vpn_users
   */

  export type AggregateVpn_users = {
    _count: Vpn_usersCountAggregateOutputType | null
    _avg: Vpn_usersAvgAggregateOutputType | null
    _sum: Vpn_usersSumAggregateOutputType | null
    _min: Vpn_usersMinAggregateOutputType | null
    _max: Vpn_usersMaxAggregateOutputType | null
  }

  export type Vpn_usersAvgAggregateOutputType = {
    package_days: number | null
  }

  export type Vpn_usersSumAggregateOutputType = {
    package_days: number | null
  }

  export type Vpn_usersMinAggregateOutputType = {
    userId: string | null
    name: string | null
    package_days: number | null
    passportNo: string | null
    phnNo: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    vpn_id: string | null
  }

  export type Vpn_usersMaxAggregateOutputType = {
    userId: string | null
    name: string | null
    package_days: number | null
    passportNo: string | null
    phnNo: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    vpn_id: string | null
  }

  export type Vpn_usersCountAggregateOutputType = {
    userId: number
    name: number
    package_days: number
    passportNo: number
    phnNo: number
    email: number
    createdAt: number
    updatedAt: number
    vpn_id: number
    _all: number
  }


  export type Vpn_usersAvgAggregateInputType = {
    package_days?: true
  }

  export type Vpn_usersSumAggregateInputType = {
    package_days?: true
  }

  export type Vpn_usersMinAggregateInputType = {
    userId?: true
    name?: true
    package_days?: true
    passportNo?: true
    phnNo?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    vpn_id?: true
  }

  export type Vpn_usersMaxAggregateInputType = {
    userId?: true
    name?: true
    package_days?: true
    passportNo?: true
    phnNo?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    vpn_id?: true
  }

  export type Vpn_usersCountAggregateInputType = {
    userId?: true
    name?: true
    package_days?: true
    passportNo?: true
    phnNo?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    vpn_id?: true
    _all?: true
  }

  export type Vpn_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vpn_users to aggregate.
     */
    where?: vpn_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vpn_users to fetch.
     */
    orderBy?: vpn_usersOrderByWithRelationInput | vpn_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vpn_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vpn_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vpn_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vpn_users
    **/
    _count?: true | Vpn_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vpn_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vpn_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vpn_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vpn_usersMaxAggregateInputType
  }

  export type GetVpn_usersAggregateType<T extends Vpn_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateVpn_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVpn_users[P]>
      : GetScalarType<T[P], AggregateVpn_users[P]>
  }




  export type vpn_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vpn_usersWhereInput
    orderBy?: vpn_usersOrderByWithAggregationInput | vpn_usersOrderByWithAggregationInput[]
    by: Vpn_usersScalarFieldEnum[] | Vpn_usersScalarFieldEnum
    having?: vpn_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vpn_usersCountAggregateInputType | true
    _avg?: Vpn_usersAvgAggregateInputType
    _sum?: Vpn_usersSumAggregateInputType
    _min?: Vpn_usersMinAggregateInputType
    _max?: Vpn_usersMaxAggregateInputType
  }

  export type Vpn_usersGroupByOutputType = {
    userId: string
    name: string
    package_days: number
    passportNo: string | null
    phnNo: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    vpn_id: string
    _count: Vpn_usersCountAggregateOutputType | null
    _avg: Vpn_usersAvgAggregateOutputType | null
    _sum: Vpn_usersSumAggregateOutputType | null
    _min: Vpn_usersMinAggregateOutputType | null
    _max: Vpn_usersMaxAggregateOutputType | null
  }

  type GetVpn_usersGroupByPayload<T extends vpn_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vpn_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vpn_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vpn_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Vpn_usersGroupByOutputType[P]>
        }
      >
    >


  export type vpn_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    package_days?: boolean
    passportNo?: boolean
    phnNo?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vpn_id?: boolean
    shawdowsocks_code?: boolean | shawdowsocks_codeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vpn_users"]>

  export type vpn_usersSelectScalar = {
    userId?: boolean
    name?: boolean
    package_days?: boolean
    passportNo?: boolean
    phnNo?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vpn_id?: boolean
  }

  export type vpn_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shawdowsocks_code?: boolean | shawdowsocks_codeDefaultArgs<ExtArgs>
  }


  export type $vpn_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vpn_users"
    objects: {
      shawdowsocks_code: Prisma.$shawdowsocks_codePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      name: string
      package_days: number
      passportNo: string | null
      phnNo: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
      vpn_id: string
    }, ExtArgs["result"]["vpn_users"]>
    composites: {}
  }


  type vpn_usersGetPayload<S extends boolean | null | undefined | vpn_usersDefaultArgs> = $Result.GetResult<Prisma.$vpn_usersPayload, S>

  type vpn_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<vpn_usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Vpn_usersCountAggregateInputType | true
    }

  export interface vpn_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vpn_users'], meta: { name: 'vpn_users' } }
    /**
     * Find zero or one Vpn_users that matches the filter.
     * @param {vpn_usersFindUniqueArgs} args - Arguments to find a Vpn_users
     * @example
     * // Get one Vpn_users
     * const vpn_users = await prisma.vpn_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends vpn_usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, vpn_usersFindUniqueArgs<ExtArgs>>
    ): Prisma__vpn_usersClient<$Result.GetResult<Prisma.$vpn_usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vpn_users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {vpn_usersFindUniqueOrThrowArgs} args - Arguments to find a Vpn_users
     * @example
     * // Get one Vpn_users
     * const vpn_users = await prisma.vpn_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends vpn_usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vpn_usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__vpn_usersClient<$Result.GetResult<Prisma.$vpn_usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vpn_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vpn_usersFindFirstArgs} args - Arguments to find a Vpn_users
     * @example
     * // Get one Vpn_users
     * const vpn_users = await prisma.vpn_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends vpn_usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, vpn_usersFindFirstArgs<ExtArgs>>
    ): Prisma__vpn_usersClient<$Result.GetResult<Prisma.$vpn_usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vpn_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vpn_usersFindFirstOrThrowArgs} args - Arguments to find a Vpn_users
     * @example
     * // Get one Vpn_users
     * const vpn_users = await prisma.vpn_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends vpn_usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vpn_usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__vpn_usersClient<$Result.GetResult<Prisma.$vpn_usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Vpn_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vpn_usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vpn_users
     * const vpn_users = await prisma.vpn_users.findMany()
     * 
     * // Get first 10 Vpn_users
     * const vpn_users = await prisma.vpn_users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const vpn_usersWithUserIdOnly = await prisma.vpn_users.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends vpn_usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vpn_usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vpn_usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vpn_users.
     * @param {vpn_usersCreateArgs} args - Arguments to create a Vpn_users.
     * @example
     * // Create one Vpn_users
     * const Vpn_users = await prisma.vpn_users.create({
     *   data: {
     *     // ... data to create a Vpn_users
     *   }
     * })
     * 
    **/
    create<T extends vpn_usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vpn_usersCreateArgs<ExtArgs>>
    ): Prisma__vpn_usersClient<$Result.GetResult<Prisma.$vpn_usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Vpn_users.
     *     @param {vpn_usersCreateManyArgs} args - Arguments to create many Vpn_users.
     *     @example
     *     // Create many Vpn_users
     *     const vpn_users = await prisma.vpn_users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends vpn_usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vpn_usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vpn_users.
     * @param {vpn_usersDeleteArgs} args - Arguments to delete one Vpn_users.
     * @example
     * // Delete one Vpn_users
     * const Vpn_users = await prisma.vpn_users.delete({
     *   where: {
     *     // ... filter to delete one Vpn_users
     *   }
     * })
     * 
    **/
    delete<T extends vpn_usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vpn_usersDeleteArgs<ExtArgs>>
    ): Prisma__vpn_usersClient<$Result.GetResult<Prisma.$vpn_usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vpn_users.
     * @param {vpn_usersUpdateArgs} args - Arguments to update one Vpn_users.
     * @example
     * // Update one Vpn_users
     * const vpn_users = await prisma.vpn_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends vpn_usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vpn_usersUpdateArgs<ExtArgs>>
    ): Prisma__vpn_usersClient<$Result.GetResult<Prisma.$vpn_usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Vpn_users.
     * @param {vpn_usersDeleteManyArgs} args - Arguments to filter Vpn_users to delete.
     * @example
     * // Delete a few Vpn_users
     * const { count } = await prisma.vpn_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends vpn_usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vpn_usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vpn_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vpn_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vpn_users
     * const vpn_users = await prisma.vpn_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends vpn_usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vpn_usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vpn_users.
     * @param {vpn_usersUpsertArgs} args - Arguments to update or create a Vpn_users.
     * @example
     * // Update or create a Vpn_users
     * const vpn_users = await prisma.vpn_users.upsert({
     *   create: {
     *     // ... data to create a Vpn_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vpn_users we want to update
     *   }
     * })
    **/
    upsert<T extends vpn_usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vpn_usersUpsertArgs<ExtArgs>>
    ): Prisma__vpn_usersClient<$Result.GetResult<Prisma.$vpn_usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Vpn_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vpn_usersCountArgs} args - Arguments to filter Vpn_users to count.
     * @example
     * // Count the number of Vpn_users
     * const count = await prisma.vpn_users.count({
     *   where: {
     *     // ... the filter for the Vpn_users we want to count
     *   }
     * })
    **/
    count<T extends vpn_usersCountArgs>(
      args?: Subset<T, vpn_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vpn_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vpn_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vpn_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vpn_usersAggregateArgs>(args: Subset<T, Vpn_usersAggregateArgs>): Prisma.PrismaPromise<GetVpn_usersAggregateType<T>>

    /**
     * Group by Vpn_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vpn_usersGroupByArgs} args - Group by arguments.
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
      T extends vpn_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vpn_usersGroupByArgs['orderBy'] }
        : { orderBy?: vpn_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vpn_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVpn_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vpn_users model
   */
  readonly fields: vpn_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vpn_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vpn_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    shawdowsocks_code<T extends shawdowsocks_codeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, shawdowsocks_codeDefaultArgs<ExtArgs>>): Prisma__shawdowsocks_codeClient<$Result.GetResult<Prisma.$shawdowsocks_codePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the vpn_users model
   */ 
  interface vpn_usersFieldRefs {
    readonly userId: FieldRef<"vpn_users", 'String'>
    readonly name: FieldRef<"vpn_users", 'String'>
    readonly package_days: FieldRef<"vpn_users", 'Int'>
    readonly passportNo: FieldRef<"vpn_users", 'String'>
    readonly phnNo: FieldRef<"vpn_users", 'String'>
    readonly email: FieldRef<"vpn_users", 'String'>
    readonly createdAt: FieldRef<"vpn_users", 'DateTime'>
    readonly updatedAt: FieldRef<"vpn_users", 'DateTime'>
    readonly vpn_id: FieldRef<"vpn_users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * vpn_users findUnique
   */
  export type vpn_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
    /**
     * Filter, which vpn_users to fetch.
     */
    where: vpn_usersWhereUniqueInput
  }


  /**
   * vpn_users findUniqueOrThrow
   */
  export type vpn_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
    /**
     * Filter, which vpn_users to fetch.
     */
    where: vpn_usersWhereUniqueInput
  }


  /**
   * vpn_users findFirst
   */
  export type vpn_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
    /**
     * Filter, which vpn_users to fetch.
     */
    where?: vpn_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vpn_users to fetch.
     */
    orderBy?: vpn_usersOrderByWithRelationInput | vpn_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vpn_users.
     */
    cursor?: vpn_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vpn_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vpn_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vpn_users.
     */
    distinct?: Vpn_usersScalarFieldEnum | Vpn_usersScalarFieldEnum[]
  }


  /**
   * vpn_users findFirstOrThrow
   */
  export type vpn_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
    /**
     * Filter, which vpn_users to fetch.
     */
    where?: vpn_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vpn_users to fetch.
     */
    orderBy?: vpn_usersOrderByWithRelationInput | vpn_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vpn_users.
     */
    cursor?: vpn_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vpn_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vpn_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vpn_users.
     */
    distinct?: Vpn_usersScalarFieldEnum | Vpn_usersScalarFieldEnum[]
  }


  /**
   * vpn_users findMany
   */
  export type vpn_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
    /**
     * Filter, which vpn_users to fetch.
     */
    where?: vpn_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vpn_users to fetch.
     */
    orderBy?: vpn_usersOrderByWithRelationInput | vpn_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vpn_users.
     */
    cursor?: vpn_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vpn_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vpn_users.
     */
    skip?: number
    distinct?: Vpn_usersScalarFieldEnum | Vpn_usersScalarFieldEnum[]
  }


  /**
   * vpn_users create
   */
  export type vpn_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a vpn_users.
     */
    data: XOR<vpn_usersCreateInput, vpn_usersUncheckedCreateInput>
  }


  /**
   * vpn_users createMany
   */
  export type vpn_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vpn_users.
     */
    data: vpn_usersCreateManyInput | vpn_usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * vpn_users update
   */
  export type vpn_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a vpn_users.
     */
    data: XOR<vpn_usersUpdateInput, vpn_usersUncheckedUpdateInput>
    /**
     * Choose, which vpn_users to update.
     */
    where: vpn_usersWhereUniqueInput
  }


  /**
   * vpn_users updateMany
   */
  export type vpn_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vpn_users.
     */
    data: XOR<vpn_usersUpdateManyMutationInput, vpn_usersUncheckedUpdateManyInput>
    /**
     * Filter which vpn_users to update
     */
    where?: vpn_usersWhereInput
  }


  /**
   * vpn_users upsert
   */
  export type vpn_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the vpn_users to update in case it exists.
     */
    where: vpn_usersWhereUniqueInput
    /**
     * In case the vpn_users found by the `where` argument doesn't exist, create a new vpn_users with this data.
     */
    create: XOR<vpn_usersCreateInput, vpn_usersUncheckedCreateInput>
    /**
     * In case the vpn_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vpn_usersUpdateInput, vpn_usersUncheckedUpdateInput>
  }


  /**
   * vpn_users delete
   */
  export type vpn_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
    /**
     * Filter which vpn_users to delete.
     */
    where: vpn_usersWhereUniqueInput
  }


  /**
   * vpn_users deleteMany
   */
  export type vpn_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vpn_users to delete
     */
    where?: vpn_usersWhereInput
  }


  /**
   * vpn_users without action
   */
  export type vpn_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vpn_users
     */
    select?: vpn_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vpn_usersInclude<ExtArgs> | null
  }



  /**
   * Model password_protect
   */

  export type AggregatePassword_protect = {
    _count: Password_protectCountAggregateOutputType | null
    _min: Password_protectMinAggregateOutputType | null
    _max: Password_protectMaxAggregateOutputType | null
  }

  export type Password_protectMinAggregateOutputType = {
    id: string | null
    password: string | null
    expiry_date: Date | null
  }

  export type Password_protectMaxAggregateOutputType = {
    id: string | null
    password: string | null
    expiry_date: Date | null
  }

  export type Password_protectCountAggregateOutputType = {
    id: number
    password: number
    expiry_date: number
    _all: number
  }


  export type Password_protectMinAggregateInputType = {
    id?: true
    password?: true
    expiry_date?: true
  }

  export type Password_protectMaxAggregateInputType = {
    id?: true
    password?: true
    expiry_date?: true
  }

  export type Password_protectCountAggregateInputType = {
    id?: true
    password?: true
    expiry_date?: true
    _all?: true
  }

  export type Password_protectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_protect to aggregate.
     */
    where?: password_protectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_protects to fetch.
     */
    orderBy?: password_protectOrderByWithRelationInput | password_protectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_protectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_protects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_protects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_protects
    **/
    _count?: true | Password_protectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_protectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_protectMaxAggregateInputType
  }

  export type GetPassword_protectAggregateType<T extends Password_protectAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_protect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_protect[P]>
      : GetScalarType<T[P], AggregatePassword_protect[P]>
  }




  export type password_protectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_protectWhereInput
    orderBy?: password_protectOrderByWithAggregationInput | password_protectOrderByWithAggregationInput[]
    by: Password_protectScalarFieldEnum[] | Password_protectScalarFieldEnum
    having?: password_protectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_protectCountAggregateInputType | true
    _min?: Password_protectMinAggregateInputType
    _max?: Password_protectMaxAggregateInputType
  }

  export type Password_protectGroupByOutputType = {
    id: string
    password: string
    expiry_date: Date
    _count: Password_protectCountAggregateOutputType | null
    _min: Password_protectMinAggregateOutputType | null
    _max: Password_protectMaxAggregateOutputType | null
  }

  type GetPassword_protectGroupByPayload<T extends password_protectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_protectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_protectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_protectGroupByOutputType[P]>
            : GetScalarType<T[P], Password_protectGroupByOutputType[P]>
        }
      >
    >


  export type password_protectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    expiry_date?: boolean
  }, ExtArgs["result"]["password_protect"]>

  export type password_protectSelectScalar = {
    id?: boolean
    password?: boolean
    expiry_date?: boolean
  }


  export type $password_protectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_protect"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      password: string
      expiry_date: Date
    }, ExtArgs["result"]["password_protect"]>
    composites: {}
  }


  type password_protectGetPayload<S extends boolean | null | undefined | password_protectDefaultArgs> = $Result.GetResult<Prisma.$password_protectPayload, S>

  type password_protectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<password_protectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Password_protectCountAggregateInputType | true
    }

  export interface password_protectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_protect'], meta: { name: 'password_protect' } }
    /**
     * Find zero or one Password_protect that matches the filter.
     * @param {password_protectFindUniqueArgs} args - Arguments to find a Password_protect
     * @example
     * // Get one Password_protect
     * const password_protect = await prisma.password_protect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends password_protectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, password_protectFindUniqueArgs<ExtArgs>>
    ): Prisma__password_protectClient<$Result.GetResult<Prisma.$password_protectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Password_protect that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {password_protectFindUniqueOrThrowArgs} args - Arguments to find a Password_protect
     * @example
     * // Get one Password_protect
     * const password_protect = await prisma.password_protect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends password_protectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, password_protectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__password_protectClient<$Result.GetResult<Prisma.$password_protectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Password_protect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_protectFindFirstArgs} args - Arguments to find a Password_protect
     * @example
     * // Get one Password_protect
     * const password_protect = await prisma.password_protect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends password_protectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, password_protectFindFirstArgs<ExtArgs>>
    ): Prisma__password_protectClient<$Result.GetResult<Prisma.$password_protectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Password_protect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_protectFindFirstOrThrowArgs} args - Arguments to find a Password_protect
     * @example
     * // Get one Password_protect
     * const password_protect = await prisma.password_protect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends password_protectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, password_protectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__password_protectClient<$Result.GetResult<Prisma.$password_protectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Password_protects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_protectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_protects
     * const password_protects = await prisma.password_protect.findMany()
     * 
     * // Get first 10 Password_protects
     * const password_protects = await prisma.password_protect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const password_protectWithIdOnly = await prisma.password_protect.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends password_protectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, password_protectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_protectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Password_protect.
     * @param {password_protectCreateArgs} args - Arguments to create a Password_protect.
     * @example
     * // Create one Password_protect
     * const Password_protect = await prisma.password_protect.create({
     *   data: {
     *     // ... data to create a Password_protect
     *   }
     * })
     * 
    **/
    create<T extends password_protectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, password_protectCreateArgs<ExtArgs>>
    ): Prisma__password_protectClient<$Result.GetResult<Prisma.$password_protectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Password_protects.
     *     @param {password_protectCreateManyArgs} args - Arguments to create many Password_protects.
     *     @example
     *     // Create many Password_protects
     *     const password_protect = await prisma.password_protect.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends password_protectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, password_protectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Password_protect.
     * @param {password_protectDeleteArgs} args - Arguments to delete one Password_protect.
     * @example
     * // Delete one Password_protect
     * const Password_protect = await prisma.password_protect.delete({
     *   where: {
     *     // ... filter to delete one Password_protect
     *   }
     * })
     * 
    **/
    delete<T extends password_protectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, password_protectDeleteArgs<ExtArgs>>
    ): Prisma__password_protectClient<$Result.GetResult<Prisma.$password_protectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Password_protect.
     * @param {password_protectUpdateArgs} args - Arguments to update one Password_protect.
     * @example
     * // Update one Password_protect
     * const password_protect = await prisma.password_protect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends password_protectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, password_protectUpdateArgs<ExtArgs>>
    ): Prisma__password_protectClient<$Result.GetResult<Prisma.$password_protectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Password_protects.
     * @param {password_protectDeleteManyArgs} args - Arguments to filter Password_protects to delete.
     * @example
     * // Delete a few Password_protects
     * const { count } = await prisma.password_protect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends password_protectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, password_protectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_protects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_protectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_protects
     * const password_protect = await prisma.password_protect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends password_protectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, password_protectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Password_protect.
     * @param {password_protectUpsertArgs} args - Arguments to update or create a Password_protect.
     * @example
     * // Update or create a Password_protect
     * const password_protect = await prisma.password_protect.upsert({
     *   create: {
     *     // ... data to create a Password_protect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_protect we want to update
     *   }
     * })
    **/
    upsert<T extends password_protectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, password_protectUpsertArgs<ExtArgs>>
    ): Prisma__password_protectClient<$Result.GetResult<Prisma.$password_protectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Password_protects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_protectCountArgs} args - Arguments to filter Password_protects to count.
     * @example
     * // Count the number of Password_protects
     * const count = await prisma.password_protect.count({
     *   where: {
     *     // ... the filter for the Password_protects we want to count
     *   }
     * })
    **/
    count<T extends password_protectCountArgs>(
      args?: Subset<T, password_protectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_protectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_protect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_protectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Password_protectAggregateArgs>(args: Subset<T, Password_protectAggregateArgs>): Prisma.PrismaPromise<GetPassword_protectAggregateType<T>>

    /**
     * Group by Password_protect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_protectGroupByArgs} args - Group by arguments.
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
      T extends password_protectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_protectGroupByArgs['orderBy'] }
        : { orderBy?: password_protectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, password_protectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_protectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_protect model
   */
  readonly fields: password_protectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_protect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_protectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the password_protect model
   */ 
  interface password_protectFieldRefs {
    readonly id: FieldRef<"password_protect", 'String'>
    readonly password: FieldRef<"password_protect", 'String'>
    readonly expiry_date: FieldRef<"password_protect", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * password_protect findUnique
   */
  export type password_protectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_protect
     */
    select?: password_protectSelect<ExtArgs> | null
    /**
     * Filter, which password_protect to fetch.
     */
    where: password_protectWhereUniqueInput
  }


  /**
   * password_protect findUniqueOrThrow
   */
  export type password_protectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_protect
     */
    select?: password_protectSelect<ExtArgs> | null
    /**
     * Filter, which password_protect to fetch.
     */
    where: password_protectWhereUniqueInput
  }


  /**
   * password_protect findFirst
   */
  export type password_protectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_protect
     */
    select?: password_protectSelect<ExtArgs> | null
    /**
     * Filter, which password_protect to fetch.
     */
    where?: password_protectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_protects to fetch.
     */
    orderBy?: password_protectOrderByWithRelationInput | password_protectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_protects.
     */
    cursor?: password_protectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_protects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_protects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_protects.
     */
    distinct?: Password_protectScalarFieldEnum | Password_protectScalarFieldEnum[]
  }


  /**
   * password_protect findFirstOrThrow
   */
  export type password_protectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_protect
     */
    select?: password_protectSelect<ExtArgs> | null
    /**
     * Filter, which password_protect to fetch.
     */
    where?: password_protectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_protects to fetch.
     */
    orderBy?: password_protectOrderByWithRelationInput | password_protectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_protects.
     */
    cursor?: password_protectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_protects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_protects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_protects.
     */
    distinct?: Password_protectScalarFieldEnum | Password_protectScalarFieldEnum[]
  }


  /**
   * password_protect findMany
   */
  export type password_protectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_protect
     */
    select?: password_protectSelect<ExtArgs> | null
    /**
     * Filter, which password_protects to fetch.
     */
    where?: password_protectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_protects to fetch.
     */
    orderBy?: password_protectOrderByWithRelationInput | password_protectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_protects.
     */
    cursor?: password_protectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_protects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_protects.
     */
    skip?: number
    distinct?: Password_protectScalarFieldEnum | Password_protectScalarFieldEnum[]
  }


  /**
   * password_protect create
   */
  export type password_protectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_protect
     */
    select?: password_protectSelect<ExtArgs> | null
    /**
     * The data needed to create a password_protect.
     */
    data: XOR<password_protectCreateInput, password_protectUncheckedCreateInput>
  }


  /**
   * password_protect createMany
   */
  export type password_protectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_protects.
     */
    data: password_protectCreateManyInput | password_protectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * password_protect update
   */
  export type password_protectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_protect
     */
    select?: password_protectSelect<ExtArgs> | null
    /**
     * The data needed to update a password_protect.
     */
    data: XOR<password_protectUpdateInput, password_protectUncheckedUpdateInput>
    /**
     * Choose, which password_protect to update.
     */
    where: password_protectWhereUniqueInput
  }


  /**
   * password_protect updateMany
   */
  export type password_protectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_protects.
     */
    data: XOR<password_protectUpdateManyMutationInput, password_protectUncheckedUpdateManyInput>
    /**
     * Filter which password_protects to update
     */
    where?: password_protectWhereInput
  }


  /**
   * password_protect upsert
   */
  export type password_protectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_protect
     */
    select?: password_protectSelect<ExtArgs> | null
    /**
     * The filter to search for the password_protect to update in case it exists.
     */
    where: password_protectWhereUniqueInput
    /**
     * In case the password_protect found by the `where` argument doesn't exist, create a new password_protect with this data.
     */
    create: XOR<password_protectCreateInput, password_protectUncheckedCreateInput>
    /**
     * In case the password_protect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_protectUpdateInput, password_protectUncheckedUpdateInput>
  }


  /**
   * password_protect delete
   */
  export type password_protectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_protect
     */
    select?: password_protectSelect<ExtArgs> | null
    /**
     * Filter which password_protect to delete.
     */
    where: password_protectWhereUniqueInput
  }


  /**
   * password_protect deleteMany
   */
  export type password_protectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_protects to delete
     */
    where?: password_protectWhereInput
  }


  /**
   * password_protect without action
   */
  export type password_protectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_protect
     */
    select?: password_protectSelect<ExtArgs> | null
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


  export const System_usersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    last_login: 'last_login',
    password: 'password',
    role: 'role'
  };

  export type System_usersScalarFieldEnum = (typeof System_usersScalarFieldEnum)[keyof typeof System_usersScalarFieldEnum]


  export const Shawdowsocks_codeScalarFieldEnum: {
    vpn_id: 'vpn_id',
    main_link: 'main_link',
    alternative_link: 'alternative_link',
    mirror1: 'mirror1',
    mirror2: 'mirror2',
    code_usage_count: 'code_usage_count',
    code_max_usage: 'code_max_usage',
    total_data: 'total_data',
    valid_upto: 'valid_upto',
    created_at: 'created_at',
    data_left: 'data_left',
    password: 'password'
  };

  export type Shawdowsocks_codeScalarFieldEnum = (typeof Shawdowsocks_codeScalarFieldEnum)[keyof typeof Shawdowsocks_codeScalarFieldEnum]


  export const Vpn_usersScalarFieldEnum: {
    userId: 'userId',
    name: 'name',
    package_days: 'package_days',
    passportNo: 'passportNo',
    phnNo: 'phnNo',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    vpn_id: 'vpn_id'
  };

  export type Vpn_usersScalarFieldEnum = (typeof Vpn_usersScalarFieldEnum)[keyof typeof Vpn_usersScalarFieldEnum]


  export const Password_protectScalarFieldEnum: {
    id: 'id',
    password: 'password',
    expiry_date: 'expiry_date'
  };

  export type Password_protectScalarFieldEnum = (typeof Password_protectScalarFieldEnum)[keyof typeof Password_protectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type system_usersWhereInput = {
    AND?: system_usersWhereInput | system_usersWhereInput[]
    OR?: system_usersWhereInput[]
    NOT?: system_usersWhereInput | system_usersWhereInput[]
    id?: StringFilter<"system_users"> | string
    name?: StringFilter<"system_users"> | string
    email?: StringFilter<"system_users"> | string
    last_login?: DateTimeNullableFilter<"system_users"> | Date | string | null
    password?: StringFilter<"system_users"> | string
    role?: EnumRoleFilter<"system_users"> | $Enums.Role
  }

  export type system_usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    last_login?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type system_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: system_usersWhereInput | system_usersWhereInput[]
    OR?: system_usersWhereInput[]
    NOT?: system_usersWhereInput | system_usersWhereInput[]
    name?: StringFilter<"system_users"> | string
    last_login?: DateTimeNullableFilter<"system_users"> | Date | string | null
    password?: StringFilter<"system_users"> | string
    role?: EnumRoleFilter<"system_users"> | $Enums.Role
  }, "id" | "email">

  export type system_usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    last_login?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: system_usersCountOrderByAggregateInput
    _max?: system_usersMaxOrderByAggregateInput
    _min?: system_usersMinOrderByAggregateInput
  }

  export type system_usersScalarWhereWithAggregatesInput = {
    AND?: system_usersScalarWhereWithAggregatesInput | system_usersScalarWhereWithAggregatesInput[]
    OR?: system_usersScalarWhereWithAggregatesInput[]
    NOT?: system_usersScalarWhereWithAggregatesInput | system_usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"system_users"> | string
    name?: StringWithAggregatesFilter<"system_users"> | string
    email?: StringWithAggregatesFilter<"system_users"> | string
    last_login?: DateTimeNullableWithAggregatesFilter<"system_users"> | Date | string | null
    password?: StringWithAggregatesFilter<"system_users"> | string
    role?: EnumRoleWithAggregatesFilter<"system_users"> | $Enums.Role
  }

  export type shawdowsocks_codeWhereInput = {
    AND?: shawdowsocks_codeWhereInput | shawdowsocks_codeWhereInput[]
    OR?: shawdowsocks_codeWhereInput[]
    NOT?: shawdowsocks_codeWhereInput | shawdowsocks_codeWhereInput[]
    vpn_id?: StringFilter<"shawdowsocks_code"> | string
    main_link?: StringFilter<"shawdowsocks_code"> | string
    alternative_link?: StringNullableFilter<"shawdowsocks_code"> | string | null
    mirror1?: StringNullableFilter<"shawdowsocks_code"> | string | null
    mirror2?: StringNullableFilter<"shawdowsocks_code"> | string | null
    code_usage_count?: IntFilter<"shawdowsocks_code"> | number
    code_max_usage?: IntFilter<"shawdowsocks_code"> | number
    total_data?: BigIntFilter<"shawdowsocks_code"> | bigint | number
    valid_upto?: DateTimeFilter<"shawdowsocks_code"> | Date | string
    created_at?: DateTimeFilter<"shawdowsocks_code"> | Date | string
    data_left?: BigIntFilter<"shawdowsocks_code"> | bigint | number
    password?: StringFilter<"shawdowsocks_code"> | string
    vpn_users?: Vpn_usersListRelationFilter
  }

  export type shawdowsocks_codeOrderByWithRelationInput = {
    vpn_id?: SortOrder
    main_link?: SortOrder
    alternative_link?: SortOrderInput | SortOrder
    mirror1?: SortOrderInput | SortOrder
    mirror2?: SortOrderInput | SortOrder
    code_usage_count?: SortOrder
    code_max_usage?: SortOrder
    total_data?: SortOrder
    valid_upto?: SortOrder
    created_at?: SortOrder
    data_left?: SortOrder
    password?: SortOrder
    vpn_users?: vpn_usersOrderByRelationAggregateInput
  }

  export type shawdowsocks_codeWhereUniqueInput = Prisma.AtLeast<{
    vpn_id?: string
    AND?: shawdowsocks_codeWhereInput | shawdowsocks_codeWhereInput[]
    OR?: shawdowsocks_codeWhereInput[]
    NOT?: shawdowsocks_codeWhereInput | shawdowsocks_codeWhereInput[]
    main_link?: StringFilter<"shawdowsocks_code"> | string
    alternative_link?: StringNullableFilter<"shawdowsocks_code"> | string | null
    mirror1?: StringNullableFilter<"shawdowsocks_code"> | string | null
    mirror2?: StringNullableFilter<"shawdowsocks_code"> | string | null
    code_usage_count?: IntFilter<"shawdowsocks_code"> | number
    code_max_usage?: IntFilter<"shawdowsocks_code"> | number
    total_data?: BigIntFilter<"shawdowsocks_code"> | bigint | number
    valid_upto?: DateTimeFilter<"shawdowsocks_code"> | Date | string
    created_at?: DateTimeFilter<"shawdowsocks_code"> | Date | string
    data_left?: BigIntFilter<"shawdowsocks_code"> | bigint | number
    password?: StringFilter<"shawdowsocks_code"> | string
    vpn_users?: Vpn_usersListRelationFilter
  }, "vpn_id">

  export type shawdowsocks_codeOrderByWithAggregationInput = {
    vpn_id?: SortOrder
    main_link?: SortOrder
    alternative_link?: SortOrderInput | SortOrder
    mirror1?: SortOrderInput | SortOrder
    mirror2?: SortOrderInput | SortOrder
    code_usage_count?: SortOrder
    code_max_usage?: SortOrder
    total_data?: SortOrder
    valid_upto?: SortOrder
    created_at?: SortOrder
    data_left?: SortOrder
    password?: SortOrder
    _count?: shawdowsocks_codeCountOrderByAggregateInput
    _avg?: shawdowsocks_codeAvgOrderByAggregateInput
    _max?: shawdowsocks_codeMaxOrderByAggregateInput
    _min?: shawdowsocks_codeMinOrderByAggregateInput
    _sum?: shawdowsocks_codeSumOrderByAggregateInput
  }

  export type shawdowsocks_codeScalarWhereWithAggregatesInput = {
    AND?: shawdowsocks_codeScalarWhereWithAggregatesInput | shawdowsocks_codeScalarWhereWithAggregatesInput[]
    OR?: shawdowsocks_codeScalarWhereWithAggregatesInput[]
    NOT?: shawdowsocks_codeScalarWhereWithAggregatesInput | shawdowsocks_codeScalarWhereWithAggregatesInput[]
    vpn_id?: StringWithAggregatesFilter<"shawdowsocks_code"> | string
    main_link?: StringWithAggregatesFilter<"shawdowsocks_code"> | string
    alternative_link?: StringNullableWithAggregatesFilter<"shawdowsocks_code"> | string | null
    mirror1?: StringNullableWithAggregatesFilter<"shawdowsocks_code"> | string | null
    mirror2?: StringNullableWithAggregatesFilter<"shawdowsocks_code"> | string | null
    code_usage_count?: IntWithAggregatesFilter<"shawdowsocks_code"> | number
    code_max_usage?: IntWithAggregatesFilter<"shawdowsocks_code"> | number
    total_data?: BigIntWithAggregatesFilter<"shawdowsocks_code"> | bigint | number
    valid_upto?: DateTimeWithAggregatesFilter<"shawdowsocks_code"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"shawdowsocks_code"> | Date | string
    data_left?: BigIntWithAggregatesFilter<"shawdowsocks_code"> | bigint | number
    password?: StringWithAggregatesFilter<"shawdowsocks_code"> | string
  }

  export type vpn_usersWhereInput = {
    AND?: vpn_usersWhereInput | vpn_usersWhereInput[]
    OR?: vpn_usersWhereInput[]
    NOT?: vpn_usersWhereInput | vpn_usersWhereInput[]
    userId?: StringFilter<"vpn_users"> | string
    name?: StringFilter<"vpn_users"> | string
    package_days?: IntFilter<"vpn_users"> | number
    passportNo?: StringNullableFilter<"vpn_users"> | string | null
    phnNo?: StringNullableFilter<"vpn_users"> | string | null
    email?: StringNullableFilter<"vpn_users"> | string | null
    createdAt?: DateTimeFilter<"vpn_users"> | Date | string
    updatedAt?: DateTimeFilter<"vpn_users"> | Date | string
    vpn_id?: StringFilter<"vpn_users"> | string
    shawdowsocks_code?: XOR<Shawdowsocks_codeRelationFilter, shawdowsocks_codeWhereInput>
  }

  export type vpn_usersOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    package_days?: SortOrder
    passportNo?: SortOrderInput | SortOrder
    phnNo?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vpn_id?: SortOrder
    shawdowsocks_code?: shawdowsocks_codeOrderByWithRelationInput
  }

  export type vpn_usersWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: vpn_usersWhereInput | vpn_usersWhereInput[]
    OR?: vpn_usersWhereInput[]
    NOT?: vpn_usersWhereInput | vpn_usersWhereInput[]
    name?: StringFilter<"vpn_users"> | string
    package_days?: IntFilter<"vpn_users"> | number
    passportNo?: StringNullableFilter<"vpn_users"> | string | null
    phnNo?: StringNullableFilter<"vpn_users"> | string | null
    email?: StringNullableFilter<"vpn_users"> | string | null
    createdAt?: DateTimeFilter<"vpn_users"> | Date | string
    updatedAt?: DateTimeFilter<"vpn_users"> | Date | string
    vpn_id?: StringFilter<"vpn_users"> | string
    shawdowsocks_code?: XOR<Shawdowsocks_codeRelationFilter, shawdowsocks_codeWhereInput>
  }, "userId">

  export type vpn_usersOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    package_days?: SortOrder
    passportNo?: SortOrderInput | SortOrder
    phnNo?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vpn_id?: SortOrder
    _count?: vpn_usersCountOrderByAggregateInput
    _avg?: vpn_usersAvgOrderByAggregateInput
    _max?: vpn_usersMaxOrderByAggregateInput
    _min?: vpn_usersMinOrderByAggregateInput
    _sum?: vpn_usersSumOrderByAggregateInput
  }

  export type vpn_usersScalarWhereWithAggregatesInput = {
    AND?: vpn_usersScalarWhereWithAggregatesInput | vpn_usersScalarWhereWithAggregatesInput[]
    OR?: vpn_usersScalarWhereWithAggregatesInput[]
    NOT?: vpn_usersScalarWhereWithAggregatesInput | vpn_usersScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"vpn_users"> | string
    name?: StringWithAggregatesFilter<"vpn_users"> | string
    package_days?: IntWithAggregatesFilter<"vpn_users"> | number
    passportNo?: StringNullableWithAggregatesFilter<"vpn_users"> | string | null
    phnNo?: StringNullableWithAggregatesFilter<"vpn_users"> | string | null
    email?: StringNullableWithAggregatesFilter<"vpn_users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"vpn_users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"vpn_users"> | Date | string
    vpn_id?: StringWithAggregatesFilter<"vpn_users"> | string
  }

  export type password_protectWhereInput = {
    AND?: password_protectWhereInput | password_protectWhereInput[]
    OR?: password_protectWhereInput[]
    NOT?: password_protectWhereInput | password_protectWhereInput[]
    id?: StringFilter<"password_protect"> | string
    password?: StringFilter<"password_protect"> | string
    expiry_date?: DateTimeFilter<"password_protect"> | Date | string
  }

  export type password_protectOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    expiry_date?: SortOrder
  }

  export type password_protectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: password_protectWhereInput | password_protectWhereInput[]
    OR?: password_protectWhereInput[]
    NOT?: password_protectWhereInput | password_protectWhereInput[]
    password?: StringFilter<"password_protect"> | string
    expiry_date?: DateTimeFilter<"password_protect"> | Date | string
  }, "id">

  export type password_protectOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    expiry_date?: SortOrder
    _count?: password_protectCountOrderByAggregateInput
    _max?: password_protectMaxOrderByAggregateInput
    _min?: password_protectMinOrderByAggregateInput
  }

  export type password_protectScalarWhereWithAggregatesInput = {
    AND?: password_protectScalarWhereWithAggregatesInput | password_protectScalarWhereWithAggregatesInput[]
    OR?: password_protectScalarWhereWithAggregatesInput[]
    NOT?: password_protectScalarWhereWithAggregatesInput | password_protectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"password_protect"> | string
    password?: StringWithAggregatesFilter<"password_protect"> | string
    expiry_date?: DateTimeWithAggregatesFilter<"password_protect"> | Date | string
  }

  export type system_usersCreateInput = {
    id?: string
    name: string
    email: string
    last_login?: Date | string | null
    password: string
    role?: $Enums.Role
  }

  export type system_usersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    last_login?: Date | string | null
    password: string
    role?: $Enums.Role
  }

  export type system_usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type system_usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type system_usersCreateManyInput = {
    id?: string
    name: string
    email: string
    last_login?: Date | string | null
    password: string
    role?: $Enums.Role
  }

  export type system_usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type system_usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type shawdowsocks_codeCreateInput = {
    vpn_id?: string
    main_link: string
    alternative_link?: string | null
    mirror1?: string | null
    mirror2?: string | null
    code_usage_count: number
    code_max_usage: number
    total_data: bigint | number
    valid_upto: Date | string
    created_at?: Date | string
    data_left: bigint | number
    password: string
    vpn_users?: vpn_usersCreateNestedManyWithoutShawdowsocks_codeInput
  }

  export type shawdowsocks_codeUncheckedCreateInput = {
    vpn_id?: string
    main_link: string
    alternative_link?: string | null
    mirror1?: string | null
    mirror2?: string | null
    code_usage_count: number
    code_max_usage: number
    total_data: bigint | number
    valid_upto: Date | string
    created_at?: Date | string
    data_left: bigint | number
    password: string
    vpn_users?: vpn_usersUncheckedCreateNestedManyWithoutShawdowsocks_codeInput
  }

  export type shawdowsocks_codeUpdateInput = {
    vpn_id?: StringFieldUpdateOperationsInput | string
    main_link?: StringFieldUpdateOperationsInput | string
    alternative_link?: NullableStringFieldUpdateOperationsInput | string | null
    mirror1?: NullableStringFieldUpdateOperationsInput | string | null
    mirror2?: NullableStringFieldUpdateOperationsInput | string | null
    code_usage_count?: IntFieldUpdateOperationsInput | number
    code_max_usage?: IntFieldUpdateOperationsInput | number
    total_data?: BigIntFieldUpdateOperationsInput | bigint | number
    valid_upto?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_left?: BigIntFieldUpdateOperationsInput | bigint | number
    password?: StringFieldUpdateOperationsInput | string
    vpn_users?: vpn_usersUpdateManyWithoutShawdowsocks_codeNestedInput
  }

  export type shawdowsocks_codeUncheckedUpdateInput = {
    vpn_id?: StringFieldUpdateOperationsInput | string
    main_link?: StringFieldUpdateOperationsInput | string
    alternative_link?: NullableStringFieldUpdateOperationsInput | string | null
    mirror1?: NullableStringFieldUpdateOperationsInput | string | null
    mirror2?: NullableStringFieldUpdateOperationsInput | string | null
    code_usage_count?: IntFieldUpdateOperationsInput | number
    code_max_usage?: IntFieldUpdateOperationsInput | number
    total_data?: BigIntFieldUpdateOperationsInput | bigint | number
    valid_upto?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_left?: BigIntFieldUpdateOperationsInput | bigint | number
    password?: StringFieldUpdateOperationsInput | string
    vpn_users?: vpn_usersUncheckedUpdateManyWithoutShawdowsocks_codeNestedInput
  }

  export type shawdowsocks_codeCreateManyInput = {
    vpn_id?: string
    main_link: string
    alternative_link?: string | null
    mirror1?: string | null
    mirror2?: string | null
    code_usage_count: number
    code_max_usage: number
    total_data: bigint | number
    valid_upto: Date | string
    created_at?: Date | string
    data_left: bigint | number
    password: string
  }

  export type shawdowsocks_codeUpdateManyMutationInput = {
    vpn_id?: StringFieldUpdateOperationsInput | string
    main_link?: StringFieldUpdateOperationsInput | string
    alternative_link?: NullableStringFieldUpdateOperationsInput | string | null
    mirror1?: NullableStringFieldUpdateOperationsInput | string | null
    mirror2?: NullableStringFieldUpdateOperationsInput | string | null
    code_usage_count?: IntFieldUpdateOperationsInput | number
    code_max_usage?: IntFieldUpdateOperationsInput | number
    total_data?: BigIntFieldUpdateOperationsInput | bigint | number
    valid_upto?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_left?: BigIntFieldUpdateOperationsInput | bigint | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type shawdowsocks_codeUncheckedUpdateManyInput = {
    vpn_id?: StringFieldUpdateOperationsInput | string
    main_link?: StringFieldUpdateOperationsInput | string
    alternative_link?: NullableStringFieldUpdateOperationsInput | string | null
    mirror1?: NullableStringFieldUpdateOperationsInput | string | null
    mirror2?: NullableStringFieldUpdateOperationsInput | string | null
    code_usage_count?: IntFieldUpdateOperationsInput | number
    code_max_usage?: IntFieldUpdateOperationsInput | number
    total_data?: BigIntFieldUpdateOperationsInput | bigint | number
    valid_upto?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_left?: BigIntFieldUpdateOperationsInput | bigint | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type vpn_usersCreateInput = {
    userId?: string
    name: string
    package_days: number
    passportNo?: string | null
    phnNo?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shawdowsocks_code: shawdowsocks_codeCreateNestedOneWithoutVpn_usersInput
  }

  export type vpn_usersUncheckedCreateInput = {
    userId?: string
    name: string
    package_days: number
    passportNo?: string | null
    phnNo?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vpn_id: string
  }

  export type vpn_usersUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    package_days?: IntFieldUpdateOperationsInput | number
    passportNo?: NullableStringFieldUpdateOperationsInput | string | null
    phnNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shawdowsocks_code?: shawdowsocks_codeUpdateOneRequiredWithoutVpn_usersNestedInput
  }

  export type vpn_usersUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    package_days?: IntFieldUpdateOperationsInput | number
    passportNo?: NullableStringFieldUpdateOperationsInput | string | null
    phnNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vpn_id?: StringFieldUpdateOperationsInput | string
  }

  export type vpn_usersCreateManyInput = {
    userId?: string
    name: string
    package_days: number
    passportNo?: string | null
    phnNo?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vpn_id: string
  }

  export type vpn_usersUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    package_days?: IntFieldUpdateOperationsInput | number
    passportNo?: NullableStringFieldUpdateOperationsInput | string | null
    phnNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vpn_usersUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    package_days?: IntFieldUpdateOperationsInput | number
    passportNo?: NullableStringFieldUpdateOperationsInput | string | null
    phnNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vpn_id?: StringFieldUpdateOperationsInput | string
  }

  export type password_protectCreateInput = {
    id?: string
    password: string
    expiry_date: Date | string
  }

  export type password_protectUncheckedCreateInput = {
    id?: string
    password: string
    expiry_date: Date | string
  }

  export type password_protectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_protectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_protectCreateManyInput = {
    id?: string
    password: string
    expiry_date: Date | string
  }

  export type password_protectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_protectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type system_usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    last_login?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type system_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    last_login?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type system_usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    last_login?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Vpn_usersListRelationFilter = {
    every?: vpn_usersWhereInput
    some?: vpn_usersWhereInput
    none?: vpn_usersWhereInput
  }

  export type vpn_usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type shawdowsocks_codeCountOrderByAggregateInput = {
    vpn_id?: SortOrder
    main_link?: SortOrder
    alternative_link?: SortOrder
    mirror1?: SortOrder
    mirror2?: SortOrder
    code_usage_count?: SortOrder
    code_max_usage?: SortOrder
    total_data?: SortOrder
    valid_upto?: SortOrder
    created_at?: SortOrder
    data_left?: SortOrder
    password?: SortOrder
  }

  export type shawdowsocks_codeAvgOrderByAggregateInput = {
    code_usage_count?: SortOrder
    code_max_usage?: SortOrder
    total_data?: SortOrder
    data_left?: SortOrder
  }

  export type shawdowsocks_codeMaxOrderByAggregateInput = {
    vpn_id?: SortOrder
    main_link?: SortOrder
    alternative_link?: SortOrder
    mirror1?: SortOrder
    mirror2?: SortOrder
    code_usage_count?: SortOrder
    code_max_usage?: SortOrder
    total_data?: SortOrder
    valid_upto?: SortOrder
    created_at?: SortOrder
    data_left?: SortOrder
    password?: SortOrder
  }

  export type shawdowsocks_codeMinOrderByAggregateInput = {
    vpn_id?: SortOrder
    main_link?: SortOrder
    alternative_link?: SortOrder
    mirror1?: SortOrder
    mirror2?: SortOrder
    code_usage_count?: SortOrder
    code_max_usage?: SortOrder
    total_data?: SortOrder
    valid_upto?: SortOrder
    created_at?: SortOrder
    data_left?: SortOrder
    password?: SortOrder
  }

  export type shawdowsocks_codeSumOrderByAggregateInput = {
    code_usage_count?: SortOrder
    code_max_usage?: SortOrder
    total_data?: SortOrder
    data_left?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Shawdowsocks_codeRelationFilter = {
    is?: shawdowsocks_codeWhereInput
    isNot?: shawdowsocks_codeWhereInput
  }

  export type vpn_usersCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    package_days?: SortOrder
    passportNo?: SortOrder
    phnNo?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vpn_id?: SortOrder
  }

  export type vpn_usersAvgOrderByAggregateInput = {
    package_days?: SortOrder
  }

  export type vpn_usersMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    package_days?: SortOrder
    passportNo?: SortOrder
    phnNo?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vpn_id?: SortOrder
  }

  export type vpn_usersMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    package_days?: SortOrder
    passportNo?: SortOrder
    phnNo?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vpn_id?: SortOrder
  }

  export type vpn_usersSumOrderByAggregateInput = {
    package_days?: SortOrder
  }

  export type password_protectCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    expiry_date?: SortOrder
  }

  export type password_protectMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    expiry_date?: SortOrder
  }

  export type password_protectMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    expiry_date?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type vpn_usersCreateNestedManyWithoutShawdowsocks_codeInput = {
    create?: XOR<vpn_usersCreateWithoutShawdowsocks_codeInput, vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput> | vpn_usersCreateWithoutShawdowsocks_codeInput[] | vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput[]
    connectOrCreate?: vpn_usersCreateOrConnectWithoutShawdowsocks_codeInput | vpn_usersCreateOrConnectWithoutShawdowsocks_codeInput[]
    createMany?: vpn_usersCreateManyShawdowsocks_codeInputEnvelope
    connect?: vpn_usersWhereUniqueInput | vpn_usersWhereUniqueInput[]
  }

  export type vpn_usersUncheckedCreateNestedManyWithoutShawdowsocks_codeInput = {
    create?: XOR<vpn_usersCreateWithoutShawdowsocks_codeInput, vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput> | vpn_usersCreateWithoutShawdowsocks_codeInput[] | vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput[]
    connectOrCreate?: vpn_usersCreateOrConnectWithoutShawdowsocks_codeInput | vpn_usersCreateOrConnectWithoutShawdowsocks_codeInput[]
    createMany?: vpn_usersCreateManyShawdowsocks_codeInputEnvelope
    connect?: vpn_usersWhereUniqueInput | vpn_usersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type vpn_usersUpdateManyWithoutShawdowsocks_codeNestedInput = {
    create?: XOR<vpn_usersCreateWithoutShawdowsocks_codeInput, vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput> | vpn_usersCreateWithoutShawdowsocks_codeInput[] | vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput[]
    connectOrCreate?: vpn_usersCreateOrConnectWithoutShawdowsocks_codeInput | vpn_usersCreateOrConnectWithoutShawdowsocks_codeInput[]
    upsert?: vpn_usersUpsertWithWhereUniqueWithoutShawdowsocks_codeInput | vpn_usersUpsertWithWhereUniqueWithoutShawdowsocks_codeInput[]
    createMany?: vpn_usersCreateManyShawdowsocks_codeInputEnvelope
    set?: vpn_usersWhereUniqueInput | vpn_usersWhereUniqueInput[]
    disconnect?: vpn_usersWhereUniqueInput | vpn_usersWhereUniqueInput[]
    delete?: vpn_usersWhereUniqueInput | vpn_usersWhereUniqueInput[]
    connect?: vpn_usersWhereUniqueInput | vpn_usersWhereUniqueInput[]
    update?: vpn_usersUpdateWithWhereUniqueWithoutShawdowsocks_codeInput | vpn_usersUpdateWithWhereUniqueWithoutShawdowsocks_codeInput[]
    updateMany?: vpn_usersUpdateManyWithWhereWithoutShawdowsocks_codeInput | vpn_usersUpdateManyWithWhereWithoutShawdowsocks_codeInput[]
    deleteMany?: vpn_usersScalarWhereInput | vpn_usersScalarWhereInput[]
  }

  export type vpn_usersUncheckedUpdateManyWithoutShawdowsocks_codeNestedInput = {
    create?: XOR<vpn_usersCreateWithoutShawdowsocks_codeInput, vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput> | vpn_usersCreateWithoutShawdowsocks_codeInput[] | vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput[]
    connectOrCreate?: vpn_usersCreateOrConnectWithoutShawdowsocks_codeInput | vpn_usersCreateOrConnectWithoutShawdowsocks_codeInput[]
    upsert?: vpn_usersUpsertWithWhereUniqueWithoutShawdowsocks_codeInput | vpn_usersUpsertWithWhereUniqueWithoutShawdowsocks_codeInput[]
    createMany?: vpn_usersCreateManyShawdowsocks_codeInputEnvelope
    set?: vpn_usersWhereUniqueInput | vpn_usersWhereUniqueInput[]
    disconnect?: vpn_usersWhereUniqueInput | vpn_usersWhereUniqueInput[]
    delete?: vpn_usersWhereUniqueInput | vpn_usersWhereUniqueInput[]
    connect?: vpn_usersWhereUniqueInput | vpn_usersWhereUniqueInput[]
    update?: vpn_usersUpdateWithWhereUniqueWithoutShawdowsocks_codeInput | vpn_usersUpdateWithWhereUniqueWithoutShawdowsocks_codeInput[]
    updateMany?: vpn_usersUpdateManyWithWhereWithoutShawdowsocks_codeInput | vpn_usersUpdateManyWithWhereWithoutShawdowsocks_codeInput[]
    deleteMany?: vpn_usersScalarWhereInput | vpn_usersScalarWhereInput[]
  }

  export type shawdowsocks_codeCreateNestedOneWithoutVpn_usersInput = {
    create?: XOR<shawdowsocks_codeCreateWithoutVpn_usersInput, shawdowsocks_codeUncheckedCreateWithoutVpn_usersInput>
    connectOrCreate?: shawdowsocks_codeCreateOrConnectWithoutVpn_usersInput
    connect?: shawdowsocks_codeWhereUniqueInput
  }

  export type shawdowsocks_codeUpdateOneRequiredWithoutVpn_usersNestedInput = {
    create?: XOR<shawdowsocks_codeCreateWithoutVpn_usersInput, shawdowsocks_codeUncheckedCreateWithoutVpn_usersInput>
    connectOrCreate?: shawdowsocks_codeCreateOrConnectWithoutVpn_usersInput
    upsert?: shawdowsocks_codeUpsertWithoutVpn_usersInput
    connect?: shawdowsocks_codeWhereUniqueInput
    update?: XOR<XOR<shawdowsocks_codeUpdateToOneWithWhereWithoutVpn_usersInput, shawdowsocks_codeUpdateWithoutVpn_usersInput>, shawdowsocks_codeUncheckedUpdateWithoutVpn_usersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type vpn_usersCreateWithoutShawdowsocks_codeInput = {
    userId?: string
    name: string
    package_days: number
    passportNo?: string | null
    phnNo?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput = {
    userId?: string
    name: string
    package_days: number
    passportNo?: string | null
    phnNo?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type vpn_usersCreateOrConnectWithoutShawdowsocks_codeInput = {
    where: vpn_usersWhereUniqueInput
    create: XOR<vpn_usersCreateWithoutShawdowsocks_codeInput, vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput>
  }

  export type vpn_usersCreateManyShawdowsocks_codeInputEnvelope = {
    data: vpn_usersCreateManyShawdowsocks_codeInput | vpn_usersCreateManyShawdowsocks_codeInput[]
    skipDuplicates?: boolean
  }

  export type vpn_usersUpsertWithWhereUniqueWithoutShawdowsocks_codeInput = {
    where: vpn_usersWhereUniqueInput
    update: XOR<vpn_usersUpdateWithoutShawdowsocks_codeInput, vpn_usersUncheckedUpdateWithoutShawdowsocks_codeInput>
    create: XOR<vpn_usersCreateWithoutShawdowsocks_codeInput, vpn_usersUncheckedCreateWithoutShawdowsocks_codeInput>
  }

  export type vpn_usersUpdateWithWhereUniqueWithoutShawdowsocks_codeInput = {
    where: vpn_usersWhereUniqueInput
    data: XOR<vpn_usersUpdateWithoutShawdowsocks_codeInput, vpn_usersUncheckedUpdateWithoutShawdowsocks_codeInput>
  }

  export type vpn_usersUpdateManyWithWhereWithoutShawdowsocks_codeInput = {
    where: vpn_usersScalarWhereInput
    data: XOR<vpn_usersUpdateManyMutationInput, vpn_usersUncheckedUpdateManyWithoutShawdowsocks_codeInput>
  }

  export type vpn_usersScalarWhereInput = {
    AND?: vpn_usersScalarWhereInput | vpn_usersScalarWhereInput[]
    OR?: vpn_usersScalarWhereInput[]
    NOT?: vpn_usersScalarWhereInput | vpn_usersScalarWhereInput[]
    userId?: StringFilter<"vpn_users"> | string
    name?: StringFilter<"vpn_users"> | string
    package_days?: IntFilter<"vpn_users"> | number
    passportNo?: StringNullableFilter<"vpn_users"> | string | null
    phnNo?: StringNullableFilter<"vpn_users"> | string | null
    email?: StringNullableFilter<"vpn_users"> | string | null
    createdAt?: DateTimeFilter<"vpn_users"> | Date | string
    updatedAt?: DateTimeFilter<"vpn_users"> | Date | string
    vpn_id?: StringFilter<"vpn_users"> | string
  }

  export type shawdowsocks_codeCreateWithoutVpn_usersInput = {
    vpn_id?: string
    main_link: string
    alternative_link?: string | null
    mirror1?: string | null
    mirror2?: string | null
    code_usage_count: number
    code_max_usage: number
    total_data: bigint | number
    valid_upto: Date | string
    created_at?: Date | string
    data_left: bigint | number
    password: string
  }

  export type shawdowsocks_codeUncheckedCreateWithoutVpn_usersInput = {
    vpn_id?: string
    main_link: string
    alternative_link?: string | null
    mirror1?: string | null
    mirror2?: string | null
    code_usage_count: number
    code_max_usage: number
    total_data: bigint | number
    valid_upto: Date | string
    created_at?: Date | string
    data_left: bigint | number
    password: string
  }

  export type shawdowsocks_codeCreateOrConnectWithoutVpn_usersInput = {
    where: shawdowsocks_codeWhereUniqueInput
    create: XOR<shawdowsocks_codeCreateWithoutVpn_usersInput, shawdowsocks_codeUncheckedCreateWithoutVpn_usersInput>
  }

  export type shawdowsocks_codeUpsertWithoutVpn_usersInput = {
    update: XOR<shawdowsocks_codeUpdateWithoutVpn_usersInput, shawdowsocks_codeUncheckedUpdateWithoutVpn_usersInput>
    create: XOR<shawdowsocks_codeCreateWithoutVpn_usersInput, shawdowsocks_codeUncheckedCreateWithoutVpn_usersInput>
    where?: shawdowsocks_codeWhereInput
  }

  export type shawdowsocks_codeUpdateToOneWithWhereWithoutVpn_usersInput = {
    where?: shawdowsocks_codeWhereInput
    data: XOR<shawdowsocks_codeUpdateWithoutVpn_usersInput, shawdowsocks_codeUncheckedUpdateWithoutVpn_usersInput>
  }

  export type shawdowsocks_codeUpdateWithoutVpn_usersInput = {
    vpn_id?: StringFieldUpdateOperationsInput | string
    main_link?: StringFieldUpdateOperationsInput | string
    alternative_link?: NullableStringFieldUpdateOperationsInput | string | null
    mirror1?: NullableStringFieldUpdateOperationsInput | string | null
    mirror2?: NullableStringFieldUpdateOperationsInput | string | null
    code_usage_count?: IntFieldUpdateOperationsInput | number
    code_max_usage?: IntFieldUpdateOperationsInput | number
    total_data?: BigIntFieldUpdateOperationsInput | bigint | number
    valid_upto?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_left?: BigIntFieldUpdateOperationsInput | bigint | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type shawdowsocks_codeUncheckedUpdateWithoutVpn_usersInput = {
    vpn_id?: StringFieldUpdateOperationsInput | string
    main_link?: StringFieldUpdateOperationsInput | string
    alternative_link?: NullableStringFieldUpdateOperationsInput | string | null
    mirror1?: NullableStringFieldUpdateOperationsInput | string | null
    mirror2?: NullableStringFieldUpdateOperationsInput | string | null
    code_usage_count?: IntFieldUpdateOperationsInput | number
    code_max_usage?: IntFieldUpdateOperationsInput | number
    total_data?: BigIntFieldUpdateOperationsInput | bigint | number
    valid_upto?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_left?: BigIntFieldUpdateOperationsInput | bigint | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type vpn_usersCreateManyShawdowsocks_codeInput = {
    userId?: string
    name: string
    package_days: number
    passportNo?: string | null
    phnNo?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type vpn_usersUpdateWithoutShawdowsocks_codeInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    package_days?: IntFieldUpdateOperationsInput | number
    passportNo?: NullableStringFieldUpdateOperationsInput | string | null
    phnNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vpn_usersUncheckedUpdateWithoutShawdowsocks_codeInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    package_days?: IntFieldUpdateOperationsInput | number
    passportNo?: NullableStringFieldUpdateOperationsInput | string | null
    phnNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vpn_usersUncheckedUpdateManyWithoutShawdowsocks_codeInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    package_days?: IntFieldUpdateOperationsInput | number
    passportNo?: NullableStringFieldUpdateOperationsInput | string | null
    phnNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Shawdowsocks_codeCountOutputTypeDefaultArgs instead
     */
    export type Shawdowsocks_codeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Shawdowsocks_codeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use system_usersDefaultArgs instead
     */
    export type system_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = system_usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use shawdowsocks_codeDefaultArgs instead
     */
    export type shawdowsocks_codeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = shawdowsocks_codeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use vpn_usersDefaultArgs instead
     */
    export type vpn_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = vpn_usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use password_protectDefaultArgs instead
     */
    export type password_protectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = password_protectDefaultArgs<ExtArgs>

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