
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Detail
 * 
 */
export type Detail = $Result.DefaultSelection<Prisma.$DetailPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Kecamatan
 * 
 */
export type Kecamatan = $Result.DefaultSelection<Prisma.$KecamatanPayload>
/**
 * Model Penduduk
 * 
 */
export type Penduduk = $Result.DefaultSelection<Prisma.$PendudukPayload>
/**
 * Model Komoditas
 * 
 */
export type Komoditas = $Result.DefaultSelection<Prisma.$KomoditasPayload>
/**
 * Model HasilPanen
 * 
 */
export type HasilPanen = $Result.DefaultSelection<Prisma.$HasilPanenPayload>
/**
 * Model PrediksiPanen
 * 
 */
export type PrediksiPanen = $Result.DefaultSelection<Prisma.$PrediksiPanenPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detail`: Exposes CRUD operations for the **Detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Details
    * const details = await prisma.detail.findMany()
    * ```
    */
  get detail(): Prisma.DetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kecamatan`: Exposes CRUD operations for the **Kecamatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kecamatans
    * const kecamatans = await prisma.kecamatan.findMany()
    * ```
    */
  get kecamatan(): Prisma.KecamatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penduduk`: Exposes CRUD operations for the **Penduduk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penduduks
    * const penduduks = await prisma.penduduk.findMany()
    * ```
    */
  get penduduk(): Prisma.PendudukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.komoditas`: Exposes CRUD operations for the **Komoditas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Komoditas
    * const komoditas = await prisma.komoditas.findMany()
    * ```
    */
  get komoditas(): Prisma.KomoditasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hasilPanen`: Exposes CRUD operations for the **HasilPanen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HasilPanens
    * const hasilPanens = await prisma.hasilPanen.findMany()
    * ```
    */
  get hasilPanen(): Prisma.HasilPanenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prediksiPanen`: Exposes CRUD operations for the **PrediksiPanen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrediksiPanens
    * const prediksiPanens = await prisma.prediksiPanen.findMany()
    * ```
    */
  get prediksiPanen(): Prisma.PrediksiPanenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Detail: 'Detail',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Kecamatan: 'Kecamatan',
    Penduduk: 'Penduduk',
    Komoditas: 'Komoditas',
    HasilPanen: 'HasilPanen',
    PrediksiPanen: 'PrediksiPanen'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    database?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "detail" | "account" | "session" | "verificationToken" | "kecamatan" | "penduduk" | "komoditas" | "hasilPanen" | "prediksiPanen"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Detail: {
        payload: Prisma.$DetailPayload<ExtArgs>
        fields: Prisma.DetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload>
          }
          findFirst: {
            args: Prisma.DetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload>
          }
          findMany: {
            args: Prisma.DetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload>[]
          }
          create: {
            args: Prisma.DetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload>
          }
          createMany: {
            args: Prisma.DetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload>[]
          }
          delete: {
            args: Prisma.DetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload>
          }
          update: {
            args: Prisma.DetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload>
          }
          deleteMany: {
            args: Prisma.DetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload>[]
          }
          upsert: {
            args: Prisma.DetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPayload>
          }
          aggregate: {
            args: Prisma.DetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetail>
          }
          groupBy: {
            args: Prisma.DetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailCountArgs<ExtArgs>
            result: $Utils.Optional<DetailCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Kecamatan: {
        payload: Prisma.$KecamatanPayload<ExtArgs>
        fields: Prisma.KecamatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KecamatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KecamatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload>
          }
          findFirst: {
            args: Prisma.KecamatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KecamatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload>
          }
          findMany: {
            args: Prisma.KecamatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload>[]
          }
          create: {
            args: Prisma.KecamatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload>
          }
          createMany: {
            args: Prisma.KecamatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KecamatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload>[]
          }
          delete: {
            args: Prisma.KecamatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload>
          }
          update: {
            args: Prisma.KecamatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload>
          }
          deleteMany: {
            args: Prisma.KecamatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KecamatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KecamatanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload>[]
          }
          upsert: {
            args: Prisma.KecamatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KecamatanPayload>
          }
          aggregate: {
            args: Prisma.KecamatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKecamatan>
          }
          groupBy: {
            args: Prisma.KecamatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KecamatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.KecamatanCountArgs<ExtArgs>
            result: $Utils.Optional<KecamatanCountAggregateOutputType> | number
          }
        }
      }
      Penduduk: {
        payload: Prisma.$PendudukPayload<ExtArgs>
        fields: Prisma.PendudukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendudukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendudukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          findFirst: {
            args: Prisma.PendudukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendudukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          findMany: {
            args: Prisma.PendudukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>[]
          }
          create: {
            args: Prisma.PendudukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          createMany: {
            args: Prisma.PendudukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendudukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>[]
          }
          delete: {
            args: Prisma.PendudukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          update: {
            args: Prisma.PendudukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          deleteMany: {
            args: Prisma.PendudukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendudukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendudukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>[]
          }
          upsert: {
            args: Prisma.PendudukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          aggregate: {
            args: Prisma.PendudukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenduduk>
          }
          groupBy: {
            args: Prisma.PendudukGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendudukGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendudukCountArgs<ExtArgs>
            result: $Utils.Optional<PendudukCountAggregateOutputType> | number
          }
        }
      }
      Komoditas: {
        payload: Prisma.$KomoditasPayload<ExtArgs>
        fields: Prisma.KomoditasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KomoditasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KomoditasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload>
          }
          findFirst: {
            args: Prisma.KomoditasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KomoditasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload>
          }
          findMany: {
            args: Prisma.KomoditasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload>[]
          }
          create: {
            args: Prisma.KomoditasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload>
          }
          createMany: {
            args: Prisma.KomoditasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KomoditasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload>[]
          }
          delete: {
            args: Prisma.KomoditasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload>
          }
          update: {
            args: Prisma.KomoditasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload>
          }
          deleteMany: {
            args: Prisma.KomoditasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KomoditasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KomoditasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload>[]
          }
          upsert: {
            args: Prisma.KomoditasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomoditasPayload>
          }
          aggregate: {
            args: Prisma.KomoditasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKomoditas>
          }
          groupBy: {
            args: Prisma.KomoditasGroupByArgs<ExtArgs>
            result: $Utils.Optional<KomoditasGroupByOutputType>[]
          }
          count: {
            args: Prisma.KomoditasCountArgs<ExtArgs>
            result: $Utils.Optional<KomoditasCountAggregateOutputType> | number
          }
        }
      }
      HasilPanen: {
        payload: Prisma.$HasilPanenPayload<ExtArgs>
        fields: Prisma.HasilPanenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HasilPanenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HasilPanenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload>
          }
          findFirst: {
            args: Prisma.HasilPanenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HasilPanenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload>
          }
          findMany: {
            args: Prisma.HasilPanenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload>[]
          }
          create: {
            args: Prisma.HasilPanenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload>
          }
          createMany: {
            args: Prisma.HasilPanenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HasilPanenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload>[]
          }
          delete: {
            args: Prisma.HasilPanenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload>
          }
          update: {
            args: Prisma.HasilPanenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload>
          }
          deleteMany: {
            args: Prisma.HasilPanenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HasilPanenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HasilPanenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload>[]
          }
          upsert: {
            args: Prisma.HasilPanenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilPanenPayload>
          }
          aggregate: {
            args: Prisma.HasilPanenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHasilPanen>
          }
          groupBy: {
            args: Prisma.HasilPanenGroupByArgs<ExtArgs>
            result: $Utils.Optional<HasilPanenGroupByOutputType>[]
          }
          count: {
            args: Prisma.HasilPanenCountArgs<ExtArgs>
            result: $Utils.Optional<HasilPanenCountAggregateOutputType> | number
          }
        }
      }
      PrediksiPanen: {
        payload: Prisma.$PrediksiPanenPayload<ExtArgs>
        fields: Prisma.PrediksiPanenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrediksiPanenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrediksiPanenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload>
          }
          findFirst: {
            args: Prisma.PrediksiPanenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrediksiPanenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload>
          }
          findMany: {
            args: Prisma.PrediksiPanenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload>[]
          }
          create: {
            args: Prisma.PrediksiPanenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload>
          }
          createMany: {
            args: Prisma.PrediksiPanenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrediksiPanenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload>[]
          }
          delete: {
            args: Prisma.PrediksiPanenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload>
          }
          update: {
            args: Prisma.PrediksiPanenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload>
          }
          deleteMany: {
            args: Prisma.PrediksiPanenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrediksiPanenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrediksiPanenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload>[]
          }
          upsert: {
            args: Prisma.PrediksiPanenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrediksiPanenPayload>
          }
          aggregate: {
            args: Prisma.PrediksiPanenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrediksiPanen>
          }
          groupBy: {
            args: Prisma.PrediksiPanenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrediksiPanenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrediksiPanenCountArgs<ExtArgs>
            result: $Utils.Optional<PrediksiPanenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    detail?: DetailOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    kecamatan?: KecamatanOmit
    penduduk?: PendudukOmit
    komoditas?: KomoditasOmit
    hasilPanen?: HasilPanenOmit
    prediksiPanen?: PrediksiPanenOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type KecamatanCountOutputType
   */

  export type KecamatanCountOutputType = {
    penduduk: number
    hasil_panen: number
    prediksi_panen: number
  }

  export type KecamatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penduduk?: boolean | KecamatanCountOutputTypeCountPendudukArgs
    hasil_panen?: boolean | KecamatanCountOutputTypeCountHasil_panenArgs
    prediksi_panen?: boolean | KecamatanCountOutputTypeCountPrediksi_panenArgs
  }

  // Custom InputTypes
  /**
   * KecamatanCountOutputType without action
   */
  export type KecamatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KecamatanCountOutputType
     */
    select?: KecamatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KecamatanCountOutputType without action
   */
  export type KecamatanCountOutputTypeCountPendudukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendudukWhereInput
  }

  /**
   * KecamatanCountOutputType without action
   */
  export type KecamatanCountOutputTypeCountHasil_panenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HasilPanenWhereInput
  }

  /**
   * KecamatanCountOutputType without action
   */
  export type KecamatanCountOutputTypeCountPrediksi_panenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrediksiPanenWhereInput
  }


  /**
   * Count Type KomoditasCountOutputType
   */

  export type KomoditasCountOutputType = {
    kecamatan: number
    hasil_panen: number
    prediksi_panen: number
  }

  export type KomoditasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | KomoditasCountOutputTypeCountKecamatanArgs
    hasil_panen?: boolean | KomoditasCountOutputTypeCountHasil_panenArgs
    prediksi_panen?: boolean | KomoditasCountOutputTypeCountPrediksi_panenArgs
  }

  // Custom InputTypes
  /**
   * KomoditasCountOutputType without action
   */
  export type KomoditasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomoditasCountOutputType
     */
    select?: KomoditasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KomoditasCountOutputType without action
   */
  export type KomoditasCountOutputTypeCountKecamatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KecamatanWhereInput
  }

  /**
   * KomoditasCountOutputType without action
   */
  export type KomoditasCountOutputTypeCountHasil_panenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HasilPanenWhereInput
  }

  /**
   * KomoditasCountOutputType without action
   */
  export type KomoditasCountOutputTypeCountPrediksi_panenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrediksiPanenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified: Date | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified: Date | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    password?: true
    created_at?: true
    updated_at?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    email_verified: Date | null
    password: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    email_verified?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    detail?: boolean | User$detailArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "email_verified" | "password" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail?: boolean | User$detailArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      detail: Prisma.$DetailPayload<ExtArgs> | null
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      email_verified: Date | null
      password: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail<T extends User$detailArgs<ExtArgs> = {}>(args?: Subset<T, User$detailArgs<ExtArgs>>): Prisma__DetailClient<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly email_verified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.detail
   */
  export type User$detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
    where?: DetailWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Detail
   */

  export type AggregateDetail = {
    _count: DetailCountAggregateOutputType | null
    _min: DetailMinAggregateOutputType | null
    _max: DetailMaxAggregateOutputType | null
  }

  export type DetailMinAggregateOutputType = {
    tax_id: string | null
    phone: string | null
    bio: string | null
    city: string | null
    county: string | null
    post_kode: string | null
    photo_profile: string | null
  }

  export type DetailMaxAggregateOutputType = {
    tax_id: string | null
    phone: string | null
    bio: string | null
    city: string | null
    county: string | null
    post_kode: string | null
    photo_profile: string | null
  }

  export type DetailCountAggregateOutputType = {
    tax_id: number
    phone: number
    bio: number
    city: number
    county: number
    post_kode: number
    photo_profile: number
    _all: number
  }


  export type DetailMinAggregateInputType = {
    tax_id?: true
    phone?: true
    bio?: true
    city?: true
    county?: true
    post_kode?: true
    photo_profile?: true
  }

  export type DetailMaxAggregateInputType = {
    tax_id?: true
    phone?: true
    bio?: true
    city?: true
    county?: true
    post_kode?: true
    photo_profile?: true
  }

  export type DetailCountAggregateInputType = {
    tax_id?: true
    phone?: true
    bio?: true
    city?: true
    county?: true
    post_kode?: true
    photo_profile?: true
    _all?: true
  }

  export type DetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detail to aggregate.
     */
    where?: DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailOrderByWithRelationInput | DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Details
    **/
    _count?: true | DetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailMaxAggregateInputType
  }

  export type GetDetailAggregateType<T extends DetailAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail[P]>
      : GetScalarType<T[P], AggregateDetail[P]>
  }




  export type DetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailWhereInput
    orderBy?: DetailOrderByWithAggregationInput | DetailOrderByWithAggregationInput[]
    by: DetailScalarFieldEnum[] | DetailScalarFieldEnum
    having?: DetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailCountAggregateInputType | true
    _min?: DetailMinAggregateInputType
    _max?: DetailMaxAggregateInputType
  }

  export type DetailGroupByOutputType = {
    tax_id: string
    phone: string
    bio: string
    city: string
    county: string
    post_kode: string
    photo_profile: string
    _count: DetailCountAggregateOutputType | null
    _min: DetailMinAggregateOutputType | null
    _max: DetailMaxAggregateOutputType | null
  }

  type GetDetailGroupByPayload<T extends DetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailGroupByOutputType[P]>
            : GetScalarType<T[P], DetailGroupByOutputType[P]>
        }
      >
    >


  export type DetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tax_id?: boolean
    phone?: boolean
    bio?: boolean
    city?: boolean
    county?: boolean
    post_kode?: boolean
    photo_profile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail"]>

  export type DetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tax_id?: boolean
    phone?: boolean
    bio?: boolean
    city?: boolean
    county?: boolean
    post_kode?: boolean
    photo_profile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail"]>

  export type DetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tax_id?: boolean
    phone?: boolean
    bio?: boolean
    city?: boolean
    county?: boolean
    post_kode?: boolean
    photo_profile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail"]>

  export type DetailSelectScalar = {
    tax_id?: boolean
    phone?: boolean
    bio?: boolean
    city?: boolean
    county?: boolean
    post_kode?: boolean
    photo_profile?: boolean
  }

  export type DetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tax_id" | "phone" | "bio" | "city" | "county" | "post_kode" | "photo_profile", ExtArgs["result"]["detail"]>
  export type DetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detail"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tax_id: string
      phone: string
      bio: string
      city: string
      county: string
      post_kode: string
      photo_profile: string
    }, ExtArgs["result"]["detail"]>
    composites: {}
  }

  type DetailGetPayload<S extends boolean | null | undefined | DetailDefaultArgs> = $Result.GetResult<Prisma.$DetailPayload, S>

  type DetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailCountAggregateInputType | true
    }

  export interface DetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detail'], meta: { name: 'Detail' } }
    /**
     * Find zero or one Detail that matches the filter.
     * @param {DetailFindUniqueArgs} args - Arguments to find a Detail
     * @example
     * // Get one Detail
     * const detail = await prisma.detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailFindUniqueArgs>(args: SelectSubset<T, DetailFindUniqueArgs<ExtArgs>>): Prisma__DetailClient<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailFindUniqueOrThrowArgs} args - Arguments to find a Detail
     * @example
     * // Get one Detail
     * const detail = await prisma.detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailClient<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailFindFirstArgs} args - Arguments to find a Detail
     * @example
     * // Get one Detail
     * const detail = await prisma.detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailFindFirstArgs>(args?: SelectSubset<T, DetailFindFirstArgs<ExtArgs>>): Prisma__DetailClient<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailFindFirstOrThrowArgs} args - Arguments to find a Detail
     * @example
     * // Get one Detail
     * const detail = await prisma.detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailClient<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Details
     * const details = await prisma.detail.findMany()
     * 
     * // Get first 10 Details
     * const details = await prisma.detail.findMany({ take: 10 })
     * 
     * // Only select the `tax_id`
     * const detailWithTax_idOnly = await prisma.detail.findMany({ select: { tax_id: true } })
     * 
     */
    findMany<T extends DetailFindManyArgs>(args?: SelectSubset<T, DetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detail.
     * @param {DetailCreateArgs} args - Arguments to create a Detail.
     * @example
     * // Create one Detail
     * const Detail = await prisma.detail.create({
     *   data: {
     *     // ... data to create a Detail
     *   }
     * })
     * 
     */
    create<T extends DetailCreateArgs>(args: SelectSubset<T, DetailCreateArgs<ExtArgs>>): Prisma__DetailClient<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Details.
     * @param {DetailCreateManyArgs} args - Arguments to create many Details.
     * @example
     * // Create many Details
     * const detail = await prisma.detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailCreateManyArgs>(args?: SelectSubset<T, DetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Details and returns the data saved in the database.
     * @param {DetailCreateManyAndReturnArgs} args - Arguments to create many Details.
     * @example
     * // Create many Details
     * const detail = await prisma.detail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Details and only return the `tax_id`
     * const detailWithTax_idOnly = await prisma.detail.createManyAndReturn({
     *   select: { tax_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detail.
     * @param {DetailDeleteArgs} args - Arguments to delete one Detail.
     * @example
     * // Delete one Detail
     * const Detail = await prisma.detail.delete({
     *   where: {
     *     // ... filter to delete one Detail
     *   }
     * })
     * 
     */
    delete<T extends DetailDeleteArgs>(args: SelectSubset<T, DetailDeleteArgs<ExtArgs>>): Prisma__DetailClient<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detail.
     * @param {DetailUpdateArgs} args - Arguments to update one Detail.
     * @example
     * // Update one Detail
     * const detail = await prisma.detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailUpdateArgs>(args: SelectSubset<T, DetailUpdateArgs<ExtArgs>>): Prisma__DetailClient<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Details.
     * @param {DetailDeleteManyArgs} args - Arguments to filter Details to delete.
     * @example
     * // Delete a few Details
     * const { count } = await prisma.detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailDeleteManyArgs>(args?: SelectSubset<T, DetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Details
     * const detail = await prisma.detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailUpdateManyArgs>(args: SelectSubset<T, DetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Details and returns the data updated in the database.
     * @param {DetailUpdateManyAndReturnArgs} args - Arguments to update many Details.
     * @example
     * // Update many Details
     * const detail = await prisma.detail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Details and only return the `tax_id`
     * const detailWithTax_idOnly = await prisma.detail.updateManyAndReturn({
     *   select: { tax_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetailUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detail.
     * @param {DetailUpsertArgs} args - Arguments to update or create a Detail.
     * @example
     * // Update or create a Detail
     * const detail = await prisma.detail.upsert({
     *   create: {
     *     // ... data to create a Detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail we want to update
     *   }
     * })
     */
    upsert<T extends DetailUpsertArgs>(args: SelectSubset<T, DetailUpsertArgs<ExtArgs>>): Prisma__DetailClient<$Result.GetResult<Prisma.$DetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailCountArgs} args - Arguments to filter Details to count.
     * @example
     * // Count the number of Details
     * const count = await prisma.detail.count({
     *   where: {
     *     // ... the filter for the Details we want to count
     *   }
     * })
    **/
    count<T extends DetailCountArgs>(
      args?: Subset<T, DetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailAggregateArgs>(args: Subset<T, DetailAggregateArgs>): Prisma.PrismaPromise<GetDetailAggregateType<T>>

    /**
     * Group by Detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailGroupByArgs} args - Group by arguments.
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
      T extends DetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailGroupByArgs['orderBy'] }
        : { orderBy?: DetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detail model
   */
  readonly fields: DetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detail model
   */
  interface DetailFieldRefs {
    readonly tax_id: FieldRef<"Detail", 'String'>
    readonly phone: FieldRef<"Detail", 'String'>
    readonly bio: FieldRef<"Detail", 'String'>
    readonly city: FieldRef<"Detail", 'String'>
    readonly county: FieldRef<"Detail", 'String'>
    readonly post_kode: FieldRef<"Detail", 'String'>
    readonly photo_profile: FieldRef<"Detail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Detail findUnique
   */
  export type DetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
    /**
     * Filter, which Detail to fetch.
     */
    where: DetailWhereUniqueInput
  }

  /**
   * Detail findUniqueOrThrow
   */
  export type DetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
    /**
     * Filter, which Detail to fetch.
     */
    where: DetailWhereUniqueInput
  }

  /**
   * Detail findFirst
   */
  export type DetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
    /**
     * Filter, which Detail to fetch.
     */
    where?: DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailOrderByWithRelationInput | DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Details.
     */
    cursor?: DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Details.
     */
    distinct?: DetailScalarFieldEnum | DetailScalarFieldEnum[]
  }

  /**
   * Detail findFirstOrThrow
   */
  export type DetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
    /**
     * Filter, which Detail to fetch.
     */
    where?: DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailOrderByWithRelationInput | DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Details.
     */
    cursor?: DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Details.
     */
    distinct?: DetailScalarFieldEnum | DetailScalarFieldEnum[]
  }

  /**
   * Detail findMany
   */
  export type DetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
    /**
     * Filter, which Details to fetch.
     */
    where?: DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Details to fetch.
     */
    orderBy?: DetailOrderByWithRelationInput | DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Details.
     */
    cursor?: DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Details.
     */
    skip?: number
    distinct?: DetailScalarFieldEnum | DetailScalarFieldEnum[]
  }

  /**
   * Detail create
   */
  export type DetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
    /**
     * The data needed to create a Detail.
     */
    data: XOR<DetailCreateInput, DetailUncheckedCreateInput>
  }

  /**
   * Detail createMany
   */
  export type DetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Details.
     */
    data: DetailCreateManyInput | DetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detail createManyAndReturn
   */
  export type DetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * The data used to create many Details.
     */
    data: DetailCreateManyInput | DetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detail update
   */
  export type DetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
    /**
     * The data needed to update a Detail.
     */
    data: XOR<DetailUpdateInput, DetailUncheckedUpdateInput>
    /**
     * Choose, which Detail to update.
     */
    where: DetailWhereUniqueInput
  }

  /**
   * Detail updateMany
   */
  export type DetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Details.
     */
    data: XOR<DetailUpdateManyMutationInput, DetailUncheckedUpdateManyInput>
    /**
     * Filter which Details to update
     */
    where?: DetailWhereInput
    /**
     * Limit how many Details to update.
     */
    limit?: number
  }

  /**
   * Detail updateManyAndReturn
   */
  export type DetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * The data used to update Details.
     */
    data: XOR<DetailUpdateManyMutationInput, DetailUncheckedUpdateManyInput>
    /**
     * Filter which Details to update
     */
    where?: DetailWhereInput
    /**
     * Limit how many Details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detail upsert
   */
  export type DetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
    /**
     * The filter to search for the Detail to update in case it exists.
     */
    where: DetailWhereUniqueInput
    /**
     * In case the Detail found by the `where` argument doesn't exist, create a new Detail with this data.
     */
    create: XOR<DetailCreateInput, DetailUncheckedCreateInput>
    /**
     * In case the Detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailUpdateInput, DetailUncheckedUpdateInput>
  }

  /**
   * Detail delete
   */
  export type DetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
    /**
     * Filter which Detail to delete.
     */
    where: DetailWhereUniqueInput
  }

  /**
   * Detail deleteMany
   */
  export type DetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Details to delete
     */
    where?: DetailWhereInput
    /**
     * Limit how many Details to delete.
     */
    limit?: number
  }

  /**
   * Detail without action
   */
  export type DetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail
     */
    select?: DetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail
     */
    omit?: DetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    id_user: string | null
    id_provider: string | null
    id_token: string | null
    type: string | null
    scope: string | null
    provider: string | null
    expires_at: number | null
    token_type: string | null
    access_token: string | null
    refresh_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    id_user: string | null
    id_provider: string | null
    id_token: string | null
    type: string | null
    scope: string | null
    provider: string | null
    expires_at: number | null
    token_type: string | null
    access_token: string | null
    refresh_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    id_user: number
    id_provider: number
    id_token: number
    type: number
    scope: number
    provider: number
    expires_at: number
    token_type: number
    access_token: number
    refresh_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    id_user?: true
    id_provider?: true
    id_token?: true
    type?: true
    scope?: true
    provider?: true
    expires_at?: true
    token_type?: true
    access_token?: true
    refresh_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    id_user?: true
    id_provider?: true
    id_token?: true
    type?: true
    scope?: true
    provider?: true
    expires_at?: true
    token_type?: true
    access_token?: true
    refresh_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    id_user?: true
    id_provider?: true
    id_token?: true
    type?: true
    scope?: true
    provider?: true
    expires_at?: true
    token_type?: true
    access_token?: true
    refresh_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    id_user: string
    id_provider: string
    id_token: string | null
    type: string
    scope: string | null
    provider: string
    expires_at: number | null
    token_type: string | null
    access_token: string | null
    refresh_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    id_provider?: boolean
    id_token?: boolean
    type?: boolean
    scope?: boolean
    provider?: boolean
    expires_at?: boolean
    token_type?: boolean
    access_token?: boolean
    refresh_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    id_provider?: boolean
    id_token?: boolean
    type?: boolean
    scope?: boolean
    provider?: boolean
    expires_at?: boolean
    token_type?: boolean
    access_token?: boolean
    refresh_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    id_provider?: boolean
    id_token?: boolean
    type?: boolean
    scope?: boolean
    provider?: boolean
    expires_at?: boolean
    token_type?: boolean
    access_token?: boolean
    refresh_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    id_user?: boolean
    id_provider?: boolean
    id_token?: boolean
    type?: boolean
    scope?: boolean
    provider?: boolean
    expires_at?: boolean
    token_type?: boolean
    access_token?: boolean
    refresh_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "id_provider" | "id_token" | "type" | "scope" | "provider" | "expires_at" | "token_type" | "access_token" | "refresh_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_user: string
      id_provider: string
      id_token: string | null
      type: string
      scope: string | null
      provider: string
      expires_at: number | null
      token_type: string | null
      access_token: string | null
      refresh_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly id_user: FieldRef<"Account", 'String'>
    readonly id_provider: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    id_user: string | null
    session_token: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    id_user: string | null
    session_token: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    id_user: number
    session_token: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    id_user?: true
    session_token?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    id_user?: true
    session_token?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    id_user?: true
    session_token?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    id_user: string
    session_token: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    session_token?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    session_token?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    session_token?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    id_user?: boolean
    session_token?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "session_token" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_user: string
      session_token: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly id_user: FieldRef<"Session", 'String'>
    readonly session_token: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Kecamatan
   */

  export type AggregateKecamatan = {
    _count: KecamatanCountAggregateOutputType | null
    _avg: KecamatanAvgAggregateOutputType | null
    _sum: KecamatanSumAggregateOutputType | null
    _min: KecamatanMinAggregateOutputType | null
    _max: KecamatanMaxAggregateOutputType | null
  }

  export type KecamatanAvgAggregateOutputType = {
    id_kecamatan: number | null
    id_komoditas: number | null
    area: number | null
    posisi_x: number | null
    posisi_y: number | null
  }

  export type KecamatanSumAggregateOutputType = {
    id_kecamatan: number | null
    id_komoditas: number | null
    area: number | null
    posisi_x: number | null
    posisi_y: number | null
  }

  export type KecamatanMinAggregateOutputType = {
    id_kecamatan: number | null
    id_komoditas: number | null
    nama_kecamatan: string | null
    deskripsi: string | null
    gambar: string | null
    area: number | null
    posisi_x: number | null
    posisi_y: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KecamatanMaxAggregateOutputType = {
    id_kecamatan: number | null
    id_komoditas: number | null
    nama_kecamatan: string | null
    deskripsi: string | null
    gambar: string | null
    area: number | null
    posisi_x: number | null
    posisi_y: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KecamatanCountAggregateOutputType = {
    id_kecamatan: number
    id_komoditas: number
    nama_kecamatan: number
    deskripsi: number
    gambar: number
    area: number
    posisi_x: number
    posisi_y: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type KecamatanAvgAggregateInputType = {
    id_kecamatan?: true
    id_komoditas?: true
    area?: true
    posisi_x?: true
    posisi_y?: true
  }

  export type KecamatanSumAggregateInputType = {
    id_kecamatan?: true
    id_komoditas?: true
    area?: true
    posisi_x?: true
    posisi_y?: true
  }

  export type KecamatanMinAggregateInputType = {
    id_kecamatan?: true
    id_komoditas?: true
    nama_kecamatan?: true
    deskripsi?: true
    gambar?: true
    area?: true
    posisi_x?: true
    posisi_y?: true
    created_at?: true
    updated_at?: true
  }

  export type KecamatanMaxAggregateInputType = {
    id_kecamatan?: true
    id_komoditas?: true
    nama_kecamatan?: true
    deskripsi?: true
    gambar?: true
    area?: true
    posisi_x?: true
    posisi_y?: true
    created_at?: true
    updated_at?: true
  }

  export type KecamatanCountAggregateInputType = {
    id_kecamatan?: true
    id_komoditas?: true
    nama_kecamatan?: true
    deskripsi?: true
    gambar?: true
    area?: true
    posisi_x?: true
    posisi_y?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type KecamatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kecamatan to aggregate.
     */
    where?: KecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kecamatans to fetch.
     */
    orderBy?: KecamatanOrderByWithRelationInput | KecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kecamatans
    **/
    _count?: true | KecamatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KecamatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KecamatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KecamatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KecamatanMaxAggregateInputType
  }

  export type GetKecamatanAggregateType<T extends KecamatanAggregateArgs> = {
        [P in keyof T & keyof AggregateKecamatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKecamatan[P]>
      : GetScalarType<T[P], AggregateKecamatan[P]>
  }




  export type KecamatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KecamatanWhereInput
    orderBy?: KecamatanOrderByWithAggregationInput | KecamatanOrderByWithAggregationInput[]
    by: KecamatanScalarFieldEnum[] | KecamatanScalarFieldEnum
    having?: KecamatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KecamatanCountAggregateInputType | true
    _avg?: KecamatanAvgAggregateInputType
    _sum?: KecamatanSumAggregateInputType
    _min?: KecamatanMinAggregateInputType
    _max?: KecamatanMaxAggregateInputType
  }

  export type KecamatanGroupByOutputType = {
    id_kecamatan: number
    id_komoditas: number
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at: Date
    updated_at: Date
    _count: KecamatanCountAggregateOutputType | null
    _avg: KecamatanAvgAggregateOutputType | null
    _sum: KecamatanSumAggregateOutputType | null
    _min: KecamatanMinAggregateOutputType | null
    _max: KecamatanMaxAggregateOutputType | null
  }

  type GetKecamatanGroupByPayload<T extends KecamatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KecamatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KecamatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KecamatanGroupByOutputType[P]>
            : GetScalarType<T[P], KecamatanGroupByOutputType[P]>
        }
      >
    >


  export type KecamatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kecamatan?: boolean
    id_komoditas?: boolean
    nama_kecamatan?: boolean
    deskripsi?: boolean
    gambar?: boolean
    area?: boolean
    posisi_x?: boolean
    posisi_y?: boolean
    created_at?: boolean
    updated_at?: boolean
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
    penduduk?: boolean | Kecamatan$pendudukArgs<ExtArgs>
    hasil_panen?: boolean | Kecamatan$hasil_panenArgs<ExtArgs>
    prediksi_panen?: boolean | Kecamatan$prediksi_panenArgs<ExtArgs>
    _count?: boolean | KecamatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kecamatan"]>

  export type KecamatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kecamatan?: boolean
    id_komoditas?: boolean
    nama_kecamatan?: boolean
    deskripsi?: boolean
    gambar?: boolean
    area?: boolean
    posisi_x?: boolean
    posisi_y?: boolean
    created_at?: boolean
    updated_at?: boolean
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kecamatan"]>

  export type KecamatanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kecamatan?: boolean
    id_komoditas?: boolean
    nama_kecamatan?: boolean
    deskripsi?: boolean
    gambar?: boolean
    area?: boolean
    posisi_x?: boolean
    posisi_y?: boolean
    created_at?: boolean
    updated_at?: boolean
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kecamatan"]>

  export type KecamatanSelectScalar = {
    id_kecamatan?: boolean
    id_komoditas?: boolean
    nama_kecamatan?: boolean
    deskripsi?: boolean
    gambar?: boolean
    area?: boolean
    posisi_x?: boolean
    posisi_y?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type KecamatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kecamatan" | "id_komoditas" | "nama_kecamatan" | "deskripsi" | "gambar" | "area" | "posisi_x" | "posisi_y" | "created_at" | "updated_at", ExtArgs["result"]["kecamatan"]>
  export type KecamatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
    penduduk?: boolean | Kecamatan$pendudukArgs<ExtArgs>
    hasil_panen?: boolean | Kecamatan$hasil_panenArgs<ExtArgs>
    prediksi_panen?: boolean | Kecamatan$prediksi_panenArgs<ExtArgs>
    _count?: boolean | KecamatanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KecamatanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }
  export type KecamatanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }

  export type $KecamatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kecamatan"
    objects: {
      komoditas: Prisma.$KomoditasPayload<ExtArgs>
      penduduk: Prisma.$PendudukPayload<ExtArgs>[]
      hasil_panen: Prisma.$HasilPanenPayload<ExtArgs>[]
      prediksi_panen: Prisma.$PrediksiPanenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kecamatan: number
      id_komoditas: number
      nama_kecamatan: string
      deskripsi: string
      gambar: string
      area: number
      posisi_x: number
      posisi_y: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["kecamatan"]>
    composites: {}
  }

  type KecamatanGetPayload<S extends boolean | null | undefined | KecamatanDefaultArgs> = $Result.GetResult<Prisma.$KecamatanPayload, S>

  type KecamatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KecamatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KecamatanCountAggregateInputType | true
    }

  export interface KecamatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kecamatan'], meta: { name: 'Kecamatan' } }
    /**
     * Find zero or one Kecamatan that matches the filter.
     * @param {KecamatanFindUniqueArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KecamatanFindUniqueArgs>(args: SelectSubset<T, KecamatanFindUniqueArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kecamatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KecamatanFindUniqueOrThrowArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KecamatanFindUniqueOrThrowArgs>(args: SelectSubset<T, KecamatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kecamatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KecamatanFindFirstArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KecamatanFindFirstArgs>(args?: SelectSubset<T, KecamatanFindFirstArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kecamatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KecamatanFindFirstOrThrowArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KecamatanFindFirstOrThrowArgs>(args?: SelectSubset<T, KecamatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kecamatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KecamatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kecamatans
     * const kecamatans = await prisma.kecamatan.findMany()
     * 
     * // Get first 10 Kecamatans
     * const kecamatans = await prisma.kecamatan.findMany({ take: 10 })
     * 
     * // Only select the `id_kecamatan`
     * const kecamatanWithId_kecamatanOnly = await prisma.kecamatan.findMany({ select: { id_kecamatan: true } })
     * 
     */
    findMany<T extends KecamatanFindManyArgs>(args?: SelectSubset<T, KecamatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kecamatan.
     * @param {KecamatanCreateArgs} args - Arguments to create a Kecamatan.
     * @example
     * // Create one Kecamatan
     * const Kecamatan = await prisma.kecamatan.create({
     *   data: {
     *     // ... data to create a Kecamatan
     *   }
     * })
     * 
     */
    create<T extends KecamatanCreateArgs>(args: SelectSubset<T, KecamatanCreateArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kecamatans.
     * @param {KecamatanCreateManyArgs} args - Arguments to create many Kecamatans.
     * @example
     * // Create many Kecamatans
     * const kecamatan = await prisma.kecamatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KecamatanCreateManyArgs>(args?: SelectSubset<T, KecamatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kecamatans and returns the data saved in the database.
     * @param {KecamatanCreateManyAndReturnArgs} args - Arguments to create many Kecamatans.
     * @example
     * // Create many Kecamatans
     * const kecamatan = await prisma.kecamatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kecamatans and only return the `id_kecamatan`
     * const kecamatanWithId_kecamatanOnly = await prisma.kecamatan.createManyAndReturn({
     *   select: { id_kecamatan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KecamatanCreateManyAndReturnArgs>(args?: SelectSubset<T, KecamatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kecamatan.
     * @param {KecamatanDeleteArgs} args - Arguments to delete one Kecamatan.
     * @example
     * // Delete one Kecamatan
     * const Kecamatan = await prisma.kecamatan.delete({
     *   where: {
     *     // ... filter to delete one Kecamatan
     *   }
     * })
     * 
     */
    delete<T extends KecamatanDeleteArgs>(args: SelectSubset<T, KecamatanDeleteArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kecamatan.
     * @param {KecamatanUpdateArgs} args - Arguments to update one Kecamatan.
     * @example
     * // Update one Kecamatan
     * const kecamatan = await prisma.kecamatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KecamatanUpdateArgs>(args: SelectSubset<T, KecamatanUpdateArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kecamatans.
     * @param {KecamatanDeleteManyArgs} args - Arguments to filter Kecamatans to delete.
     * @example
     * // Delete a few Kecamatans
     * const { count } = await prisma.kecamatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KecamatanDeleteManyArgs>(args?: SelectSubset<T, KecamatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kecamatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KecamatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kecamatans
     * const kecamatan = await prisma.kecamatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KecamatanUpdateManyArgs>(args: SelectSubset<T, KecamatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kecamatans and returns the data updated in the database.
     * @param {KecamatanUpdateManyAndReturnArgs} args - Arguments to update many Kecamatans.
     * @example
     * // Update many Kecamatans
     * const kecamatan = await prisma.kecamatan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kecamatans and only return the `id_kecamatan`
     * const kecamatanWithId_kecamatanOnly = await prisma.kecamatan.updateManyAndReturn({
     *   select: { id_kecamatan: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KecamatanUpdateManyAndReturnArgs>(args: SelectSubset<T, KecamatanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kecamatan.
     * @param {KecamatanUpsertArgs} args - Arguments to update or create a Kecamatan.
     * @example
     * // Update or create a Kecamatan
     * const kecamatan = await prisma.kecamatan.upsert({
     *   create: {
     *     // ... data to create a Kecamatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kecamatan we want to update
     *   }
     * })
     */
    upsert<T extends KecamatanUpsertArgs>(args: SelectSubset<T, KecamatanUpsertArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kecamatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KecamatanCountArgs} args - Arguments to filter Kecamatans to count.
     * @example
     * // Count the number of Kecamatans
     * const count = await prisma.kecamatan.count({
     *   where: {
     *     // ... the filter for the Kecamatans we want to count
     *   }
     * })
    **/
    count<T extends KecamatanCountArgs>(
      args?: Subset<T, KecamatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KecamatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kecamatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KecamatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KecamatanAggregateArgs>(args: Subset<T, KecamatanAggregateArgs>): Prisma.PrismaPromise<GetKecamatanAggregateType<T>>

    /**
     * Group by Kecamatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KecamatanGroupByArgs} args - Group by arguments.
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
      T extends KecamatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KecamatanGroupByArgs['orderBy'] }
        : { orderBy?: KecamatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KecamatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKecamatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kecamatan model
   */
  readonly fields: KecamatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kecamatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KecamatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    komoditas<T extends KomoditasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KomoditasDefaultArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    penduduk<T extends Kecamatan$pendudukArgs<ExtArgs> = {}>(args?: Subset<T, Kecamatan$pendudukArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hasil_panen<T extends Kecamatan$hasil_panenArgs<ExtArgs> = {}>(args?: Subset<T, Kecamatan$hasil_panenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prediksi_panen<T extends Kecamatan$prediksi_panenArgs<ExtArgs> = {}>(args?: Subset<T, Kecamatan$prediksi_panenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kecamatan model
   */
  interface KecamatanFieldRefs {
    readonly id_kecamatan: FieldRef<"Kecamatan", 'Int'>
    readonly id_komoditas: FieldRef<"Kecamatan", 'Int'>
    readonly nama_kecamatan: FieldRef<"Kecamatan", 'String'>
    readonly deskripsi: FieldRef<"Kecamatan", 'String'>
    readonly gambar: FieldRef<"Kecamatan", 'String'>
    readonly area: FieldRef<"Kecamatan", 'Float'>
    readonly posisi_x: FieldRef<"Kecamatan", 'Int'>
    readonly posisi_y: FieldRef<"Kecamatan", 'Int'>
    readonly created_at: FieldRef<"Kecamatan", 'DateTime'>
    readonly updated_at: FieldRef<"Kecamatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kecamatan findUnique
   */
  export type KecamatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
    /**
     * Filter, which Kecamatan to fetch.
     */
    where: KecamatanWhereUniqueInput
  }

  /**
   * Kecamatan findUniqueOrThrow
   */
  export type KecamatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
    /**
     * Filter, which Kecamatan to fetch.
     */
    where: KecamatanWhereUniqueInput
  }

  /**
   * Kecamatan findFirst
   */
  export type KecamatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
    /**
     * Filter, which Kecamatan to fetch.
     */
    where?: KecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kecamatans to fetch.
     */
    orderBy?: KecamatanOrderByWithRelationInput | KecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kecamatans.
     */
    cursor?: KecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kecamatans.
     */
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
  }

  /**
   * Kecamatan findFirstOrThrow
   */
  export type KecamatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
    /**
     * Filter, which Kecamatan to fetch.
     */
    where?: KecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kecamatans to fetch.
     */
    orderBy?: KecamatanOrderByWithRelationInput | KecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kecamatans.
     */
    cursor?: KecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kecamatans.
     */
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
  }

  /**
   * Kecamatan findMany
   */
  export type KecamatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
    /**
     * Filter, which Kecamatans to fetch.
     */
    where?: KecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kecamatans to fetch.
     */
    orderBy?: KecamatanOrderByWithRelationInput | KecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kecamatans.
     */
    cursor?: KecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kecamatans.
     */
    skip?: number
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
  }

  /**
   * Kecamatan create
   */
  export type KecamatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
    /**
     * The data needed to create a Kecamatan.
     */
    data: XOR<KecamatanCreateInput, KecamatanUncheckedCreateInput>
  }

  /**
   * Kecamatan createMany
   */
  export type KecamatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kecamatans.
     */
    data: KecamatanCreateManyInput | KecamatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kecamatan createManyAndReturn
   */
  export type KecamatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * The data used to create many Kecamatans.
     */
    data: KecamatanCreateManyInput | KecamatanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kecamatan update
   */
  export type KecamatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
    /**
     * The data needed to update a Kecamatan.
     */
    data: XOR<KecamatanUpdateInput, KecamatanUncheckedUpdateInput>
    /**
     * Choose, which Kecamatan to update.
     */
    where: KecamatanWhereUniqueInput
  }

  /**
   * Kecamatan updateMany
   */
  export type KecamatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kecamatans.
     */
    data: XOR<KecamatanUpdateManyMutationInput, KecamatanUncheckedUpdateManyInput>
    /**
     * Filter which Kecamatans to update
     */
    where?: KecamatanWhereInput
    /**
     * Limit how many Kecamatans to update.
     */
    limit?: number
  }

  /**
   * Kecamatan updateManyAndReturn
   */
  export type KecamatanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * The data used to update Kecamatans.
     */
    data: XOR<KecamatanUpdateManyMutationInput, KecamatanUncheckedUpdateManyInput>
    /**
     * Filter which Kecamatans to update
     */
    where?: KecamatanWhereInput
    /**
     * Limit how many Kecamatans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kecamatan upsert
   */
  export type KecamatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
    /**
     * The filter to search for the Kecamatan to update in case it exists.
     */
    where: KecamatanWhereUniqueInput
    /**
     * In case the Kecamatan found by the `where` argument doesn't exist, create a new Kecamatan with this data.
     */
    create: XOR<KecamatanCreateInput, KecamatanUncheckedCreateInput>
    /**
     * In case the Kecamatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KecamatanUpdateInput, KecamatanUncheckedUpdateInput>
  }

  /**
   * Kecamatan delete
   */
  export type KecamatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
    /**
     * Filter which Kecamatan to delete.
     */
    where: KecamatanWhereUniqueInput
  }

  /**
   * Kecamatan deleteMany
   */
  export type KecamatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kecamatans to delete
     */
    where?: KecamatanWhereInput
    /**
     * Limit how many Kecamatans to delete.
     */
    limit?: number
  }

  /**
   * Kecamatan.penduduk
   */
  export type Kecamatan$pendudukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    where?: PendudukWhereInput
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    cursor?: PendudukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendudukScalarFieldEnum | PendudukScalarFieldEnum[]
  }

  /**
   * Kecamatan.hasil_panen
   */
  export type Kecamatan$hasil_panenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    where?: HasilPanenWhereInput
    orderBy?: HasilPanenOrderByWithRelationInput | HasilPanenOrderByWithRelationInput[]
    cursor?: HasilPanenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HasilPanenScalarFieldEnum | HasilPanenScalarFieldEnum[]
  }

  /**
   * Kecamatan.prediksi_panen
   */
  export type Kecamatan$prediksi_panenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    where?: PrediksiPanenWhereInput
    orderBy?: PrediksiPanenOrderByWithRelationInput | PrediksiPanenOrderByWithRelationInput[]
    cursor?: PrediksiPanenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrediksiPanenScalarFieldEnum | PrediksiPanenScalarFieldEnum[]
  }

  /**
   * Kecamatan without action
   */
  export type KecamatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
  }


  /**
   * Model Penduduk
   */

  export type AggregatePenduduk = {
    _count: PendudukCountAggregateOutputType | null
    _avg: PendudukAvgAggregateOutputType | null
    _sum: PendudukSumAggregateOutputType | null
    _min: PendudukMinAggregateOutputType | null
    _max: PendudukMaxAggregateOutputType | null
  }

  export type PendudukAvgAggregateOutputType = {
    id_penduduk: number | null
    id_kecamatan: number | null
    data_tahun: number | null
    jumlah_penduduk: number | null
  }

  export type PendudukSumAggregateOutputType = {
    id_penduduk: number | null
    id_kecamatan: number | null
    data_tahun: number | null
    jumlah_penduduk: number | null
  }

  export type PendudukMinAggregateOutputType = {
    id_penduduk: number | null
    id_kecamatan: number | null
    data_tahun: number | null
    jumlah_penduduk: number | null
    laju_pertumbuhan: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PendudukMaxAggregateOutputType = {
    id_penduduk: number | null
    id_kecamatan: number | null
    data_tahun: number | null
    jumlah_penduduk: number | null
    laju_pertumbuhan: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PendudukCountAggregateOutputType = {
    id_penduduk: number
    id_kecamatan: number
    data_tahun: number
    jumlah_penduduk: number
    laju_pertumbuhan: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PendudukAvgAggregateInputType = {
    id_penduduk?: true
    id_kecamatan?: true
    data_tahun?: true
    jumlah_penduduk?: true
  }

  export type PendudukSumAggregateInputType = {
    id_penduduk?: true
    id_kecamatan?: true
    data_tahun?: true
    jumlah_penduduk?: true
  }

  export type PendudukMinAggregateInputType = {
    id_penduduk?: true
    id_kecamatan?: true
    data_tahun?: true
    jumlah_penduduk?: true
    laju_pertumbuhan?: true
    created_at?: true
    updated_at?: true
  }

  export type PendudukMaxAggregateInputType = {
    id_penduduk?: true
    id_kecamatan?: true
    data_tahun?: true
    jumlah_penduduk?: true
    laju_pertumbuhan?: true
    created_at?: true
    updated_at?: true
  }

  export type PendudukCountAggregateInputType = {
    id_penduduk?: true
    id_kecamatan?: true
    data_tahun?: true
    jumlah_penduduk?: true
    laju_pertumbuhan?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PendudukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penduduk to aggregate.
     */
    where?: PendudukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penduduks to fetch.
     */
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendudukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penduduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penduduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penduduks
    **/
    _count?: true | PendudukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendudukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendudukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendudukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendudukMaxAggregateInputType
  }

  export type GetPendudukAggregateType<T extends PendudukAggregateArgs> = {
        [P in keyof T & keyof AggregatePenduduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenduduk[P]>
      : GetScalarType<T[P], AggregatePenduduk[P]>
  }




  export type PendudukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendudukWhereInput
    orderBy?: PendudukOrderByWithAggregationInput | PendudukOrderByWithAggregationInput[]
    by: PendudukScalarFieldEnum[] | PendudukScalarFieldEnum
    having?: PendudukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendudukCountAggregateInputType | true
    _avg?: PendudukAvgAggregateInputType
    _sum?: PendudukSumAggregateInputType
    _min?: PendudukMinAggregateInputType
    _max?: PendudukMaxAggregateInputType
  }

  export type PendudukGroupByOutputType = {
    id_penduduk: number
    id_kecamatan: number
    data_tahun: number
    jumlah_penduduk: number
    laju_pertumbuhan: string
    created_at: Date
    updated_at: Date
    _count: PendudukCountAggregateOutputType | null
    _avg: PendudukAvgAggregateOutputType | null
    _sum: PendudukSumAggregateOutputType | null
    _min: PendudukMinAggregateOutputType | null
    _max: PendudukMaxAggregateOutputType | null
  }

  type GetPendudukGroupByPayload<T extends PendudukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendudukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendudukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendudukGroupByOutputType[P]>
            : GetScalarType<T[P], PendudukGroupByOutputType[P]>
        }
      >
    >


  export type PendudukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_penduduk?: boolean
    id_kecamatan?: boolean
    data_tahun?: boolean
    jumlah_penduduk?: boolean
    laju_pertumbuhan?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penduduk"]>

  export type PendudukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_penduduk?: boolean
    id_kecamatan?: boolean
    data_tahun?: boolean
    jumlah_penduduk?: boolean
    laju_pertumbuhan?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penduduk"]>

  export type PendudukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_penduduk?: boolean
    id_kecamatan?: boolean
    data_tahun?: boolean
    jumlah_penduduk?: boolean
    laju_pertumbuhan?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penduduk"]>

  export type PendudukSelectScalar = {
    id_penduduk?: boolean
    id_kecamatan?: boolean
    data_tahun?: boolean
    jumlah_penduduk?: boolean
    laju_pertumbuhan?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PendudukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_penduduk" | "id_kecamatan" | "data_tahun" | "jumlah_penduduk" | "laju_pertumbuhan" | "created_at" | "updated_at", ExtArgs["result"]["penduduk"]>
  export type PendudukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
  }
  export type PendudukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
  }
  export type PendudukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
  }

  export type $PendudukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Penduduk"
    objects: {
      kecamatan: Prisma.$KecamatanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_penduduk: number
      id_kecamatan: number
      data_tahun: number
      jumlah_penduduk: number
      laju_pertumbuhan: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["penduduk"]>
    composites: {}
  }

  type PendudukGetPayload<S extends boolean | null | undefined | PendudukDefaultArgs> = $Result.GetResult<Prisma.$PendudukPayload, S>

  type PendudukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendudukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendudukCountAggregateInputType | true
    }

  export interface PendudukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penduduk'], meta: { name: 'Penduduk' } }
    /**
     * Find zero or one Penduduk that matches the filter.
     * @param {PendudukFindUniqueArgs} args - Arguments to find a Penduduk
     * @example
     * // Get one Penduduk
     * const penduduk = await prisma.penduduk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendudukFindUniqueArgs>(args: SelectSubset<T, PendudukFindUniqueArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penduduk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendudukFindUniqueOrThrowArgs} args - Arguments to find a Penduduk
     * @example
     * // Get one Penduduk
     * const penduduk = await prisma.penduduk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendudukFindUniqueOrThrowArgs>(args: SelectSubset<T, PendudukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penduduk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukFindFirstArgs} args - Arguments to find a Penduduk
     * @example
     * // Get one Penduduk
     * const penduduk = await prisma.penduduk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendudukFindFirstArgs>(args?: SelectSubset<T, PendudukFindFirstArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penduduk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukFindFirstOrThrowArgs} args - Arguments to find a Penduduk
     * @example
     * // Get one Penduduk
     * const penduduk = await prisma.penduduk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendudukFindFirstOrThrowArgs>(args?: SelectSubset<T, PendudukFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penduduks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penduduks
     * const penduduks = await prisma.penduduk.findMany()
     * 
     * // Get first 10 Penduduks
     * const penduduks = await prisma.penduduk.findMany({ take: 10 })
     * 
     * // Only select the `id_penduduk`
     * const pendudukWithId_pendudukOnly = await prisma.penduduk.findMany({ select: { id_penduduk: true } })
     * 
     */
    findMany<T extends PendudukFindManyArgs>(args?: SelectSubset<T, PendudukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penduduk.
     * @param {PendudukCreateArgs} args - Arguments to create a Penduduk.
     * @example
     * // Create one Penduduk
     * const Penduduk = await prisma.penduduk.create({
     *   data: {
     *     // ... data to create a Penduduk
     *   }
     * })
     * 
     */
    create<T extends PendudukCreateArgs>(args: SelectSubset<T, PendudukCreateArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penduduks.
     * @param {PendudukCreateManyArgs} args - Arguments to create many Penduduks.
     * @example
     * // Create many Penduduks
     * const penduduk = await prisma.penduduk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendudukCreateManyArgs>(args?: SelectSubset<T, PendudukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penduduks and returns the data saved in the database.
     * @param {PendudukCreateManyAndReturnArgs} args - Arguments to create many Penduduks.
     * @example
     * // Create many Penduduks
     * const penduduk = await prisma.penduduk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penduduks and only return the `id_penduduk`
     * const pendudukWithId_pendudukOnly = await prisma.penduduk.createManyAndReturn({
     *   select: { id_penduduk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendudukCreateManyAndReturnArgs>(args?: SelectSubset<T, PendudukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Penduduk.
     * @param {PendudukDeleteArgs} args - Arguments to delete one Penduduk.
     * @example
     * // Delete one Penduduk
     * const Penduduk = await prisma.penduduk.delete({
     *   where: {
     *     // ... filter to delete one Penduduk
     *   }
     * })
     * 
     */
    delete<T extends PendudukDeleteArgs>(args: SelectSubset<T, PendudukDeleteArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penduduk.
     * @param {PendudukUpdateArgs} args - Arguments to update one Penduduk.
     * @example
     * // Update one Penduduk
     * const penduduk = await prisma.penduduk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendudukUpdateArgs>(args: SelectSubset<T, PendudukUpdateArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penduduks.
     * @param {PendudukDeleteManyArgs} args - Arguments to filter Penduduks to delete.
     * @example
     * // Delete a few Penduduks
     * const { count } = await prisma.penduduk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendudukDeleteManyArgs>(args?: SelectSubset<T, PendudukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penduduks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penduduks
     * const penduduk = await prisma.penduduk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendudukUpdateManyArgs>(args: SelectSubset<T, PendudukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penduduks and returns the data updated in the database.
     * @param {PendudukUpdateManyAndReturnArgs} args - Arguments to update many Penduduks.
     * @example
     * // Update many Penduduks
     * const penduduk = await prisma.penduduk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penduduks and only return the `id_penduduk`
     * const pendudukWithId_pendudukOnly = await prisma.penduduk.updateManyAndReturn({
     *   select: { id_penduduk: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PendudukUpdateManyAndReturnArgs>(args: SelectSubset<T, PendudukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Penduduk.
     * @param {PendudukUpsertArgs} args - Arguments to update or create a Penduduk.
     * @example
     * // Update or create a Penduduk
     * const penduduk = await prisma.penduduk.upsert({
     *   create: {
     *     // ... data to create a Penduduk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penduduk we want to update
     *   }
     * })
     */
    upsert<T extends PendudukUpsertArgs>(args: SelectSubset<T, PendudukUpsertArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penduduks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukCountArgs} args - Arguments to filter Penduduks to count.
     * @example
     * // Count the number of Penduduks
     * const count = await prisma.penduduk.count({
     *   where: {
     *     // ... the filter for the Penduduks we want to count
     *   }
     * })
    **/
    count<T extends PendudukCountArgs>(
      args?: Subset<T, PendudukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendudukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penduduk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendudukAggregateArgs>(args: Subset<T, PendudukAggregateArgs>): Prisma.PrismaPromise<GetPendudukAggregateType<T>>

    /**
     * Group by Penduduk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukGroupByArgs} args - Group by arguments.
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
      T extends PendudukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendudukGroupByArgs['orderBy'] }
        : { orderBy?: PendudukGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendudukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendudukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penduduk model
   */
  readonly fields: PendudukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penduduk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendudukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kecamatan<T extends KecamatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KecamatanDefaultArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Penduduk model
   */
  interface PendudukFieldRefs {
    readonly id_penduduk: FieldRef<"Penduduk", 'Int'>
    readonly id_kecamatan: FieldRef<"Penduduk", 'Int'>
    readonly data_tahun: FieldRef<"Penduduk", 'Int'>
    readonly jumlah_penduduk: FieldRef<"Penduduk", 'Float'>
    readonly laju_pertumbuhan: FieldRef<"Penduduk", 'String'>
    readonly created_at: FieldRef<"Penduduk", 'DateTime'>
    readonly updated_at: FieldRef<"Penduduk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Penduduk findUnique
   */
  export type PendudukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter, which Penduduk to fetch.
     */
    where: PendudukWhereUniqueInput
  }

  /**
   * Penduduk findUniqueOrThrow
   */
  export type PendudukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter, which Penduduk to fetch.
     */
    where: PendudukWhereUniqueInput
  }

  /**
   * Penduduk findFirst
   */
  export type PendudukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter, which Penduduk to fetch.
     */
    where?: PendudukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penduduks to fetch.
     */
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penduduks.
     */
    cursor?: PendudukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penduduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penduduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penduduks.
     */
    distinct?: PendudukScalarFieldEnum | PendudukScalarFieldEnum[]
  }

  /**
   * Penduduk findFirstOrThrow
   */
  export type PendudukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter, which Penduduk to fetch.
     */
    where?: PendudukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penduduks to fetch.
     */
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penduduks.
     */
    cursor?: PendudukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penduduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penduduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penduduks.
     */
    distinct?: PendudukScalarFieldEnum | PendudukScalarFieldEnum[]
  }

  /**
   * Penduduk findMany
   */
  export type PendudukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter, which Penduduks to fetch.
     */
    where?: PendudukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penduduks to fetch.
     */
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penduduks.
     */
    cursor?: PendudukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penduduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penduduks.
     */
    skip?: number
    distinct?: PendudukScalarFieldEnum | PendudukScalarFieldEnum[]
  }

  /**
   * Penduduk create
   */
  export type PendudukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * The data needed to create a Penduduk.
     */
    data: XOR<PendudukCreateInput, PendudukUncheckedCreateInput>
  }

  /**
   * Penduduk createMany
   */
  export type PendudukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penduduks.
     */
    data: PendudukCreateManyInput | PendudukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penduduk createManyAndReturn
   */
  export type PendudukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * The data used to create many Penduduks.
     */
    data: PendudukCreateManyInput | PendudukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Penduduk update
   */
  export type PendudukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * The data needed to update a Penduduk.
     */
    data: XOR<PendudukUpdateInput, PendudukUncheckedUpdateInput>
    /**
     * Choose, which Penduduk to update.
     */
    where: PendudukWhereUniqueInput
  }

  /**
   * Penduduk updateMany
   */
  export type PendudukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penduduks.
     */
    data: XOR<PendudukUpdateManyMutationInput, PendudukUncheckedUpdateManyInput>
    /**
     * Filter which Penduduks to update
     */
    where?: PendudukWhereInput
    /**
     * Limit how many Penduduks to update.
     */
    limit?: number
  }

  /**
   * Penduduk updateManyAndReturn
   */
  export type PendudukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * The data used to update Penduduks.
     */
    data: XOR<PendudukUpdateManyMutationInput, PendudukUncheckedUpdateManyInput>
    /**
     * Filter which Penduduks to update
     */
    where?: PendudukWhereInput
    /**
     * Limit how many Penduduks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Penduduk upsert
   */
  export type PendudukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * The filter to search for the Penduduk to update in case it exists.
     */
    where: PendudukWhereUniqueInput
    /**
     * In case the Penduduk found by the `where` argument doesn't exist, create a new Penduduk with this data.
     */
    create: XOR<PendudukCreateInput, PendudukUncheckedCreateInput>
    /**
     * In case the Penduduk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendudukUpdateInput, PendudukUncheckedUpdateInput>
  }

  /**
   * Penduduk delete
   */
  export type PendudukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter which Penduduk to delete.
     */
    where: PendudukWhereUniqueInput
  }

  /**
   * Penduduk deleteMany
   */
  export type PendudukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penduduks to delete
     */
    where?: PendudukWhereInput
    /**
     * Limit how many Penduduks to delete.
     */
    limit?: number
  }

  /**
   * Penduduk without action
   */
  export type PendudukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
  }


  /**
   * Model Komoditas
   */

  export type AggregateKomoditas = {
    _count: KomoditasCountAggregateOutputType | null
    _avg: KomoditasAvgAggregateOutputType | null
    _sum: KomoditasSumAggregateOutputType | null
    _min: KomoditasMinAggregateOutputType | null
    _max: KomoditasMaxAggregateOutputType | null
  }

  export type KomoditasAvgAggregateOutputType = {
    id_komoditas: number | null
    posisi_x: number | null
    posisi_y: number | null
  }

  export type KomoditasSumAggregateOutputType = {
    id_komoditas: number | null
    posisi_x: number | null
    posisi_y: number | null
  }

  export type KomoditasMinAggregateOutputType = {
    id_komoditas: number | null
    nama_komoditas: string | null
    posisi_x: number | null
    posisi_y: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type KomoditasMaxAggregateOutputType = {
    id_komoditas: number | null
    nama_komoditas: string | null
    posisi_x: number | null
    posisi_y: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type KomoditasCountAggregateOutputType = {
    id_komoditas: number
    nama_komoditas: number
    posisi_x: number
    posisi_y: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type KomoditasAvgAggregateInputType = {
    id_komoditas?: true
    posisi_x?: true
    posisi_y?: true
  }

  export type KomoditasSumAggregateInputType = {
    id_komoditas?: true
    posisi_x?: true
    posisi_y?: true
  }

  export type KomoditasMinAggregateInputType = {
    id_komoditas?: true
    nama_komoditas?: true
    posisi_x?: true
    posisi_y?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type KomoditasMaxAggregateInputType = {
    id_komoditas?: true
    nama_komoditas?: true
    posisi_x?: true
    posisi_y?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type KomoditasCountAggregateInputType = {
    id_komoditas?: true
    nama_komoditas?: true
    posisi_x?: true
    posisi_y?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type KomoditasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Komoditas to aggregate.
     */
    where?: KomoditasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Komoditas to fetch.
     */
    orderBy?: KomoditasOrderByWithRelationInput | KomoditasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KomoditasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Komoditas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Komoditas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Komoditas
    **/
    _count?: true | KomoditasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KomoditasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KomoditasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KomoditasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KomoditasMaxAggregateInputType
  }

  export type GetKomoditasAggregateType<T extends KomoditasAggregateArgs> = {
        [P in keyof T & keyof AggregateKomoditas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKomoditas[P]>
      : GetScalarType<T[P], AggregateKomoditas[P]>
  }




  export type KomoditasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KomoditasWhereInput
    orderBy?: KomoditasOrderByWithAggregationInput | KomoditasOrderByWithAggregationInput[]
    by: KomoditasScalarFieldEnum[] | KomoditasScalarFieldEnum
    having?: KomoditasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KomoditasCountAggregateInputType | true
    _avg?: KomoditasAvgAggregateInputType
    _sum?: KomoditasSumAggregateInputType
    _min?: KomoditasMinAggregateInputType
    _max?: KomoditasMaxAggregateInputType
  }

  export type KomoditasGroupByOutputType = {
    id_komoditas: number
    nama_komoditas: string
    posisi_x: number
    posisi_y: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: KomoditasCountAggregateOutputType | null
    _avg: KomoditasAvgAggregateOutputType | null
    _sum: KomoditasSumAggregateOutputType | null
    _min: KomoditasMinAggregateOutputType | null
    _max: KomoditasMaxAggregateOutputType | null
  }

  type GetKomoditasGroupByPayload<T extends KomoditasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KomoditasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KomoditasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KomoditasGroupByOutputType[P]>
            : GetScalarType<T[P], KomoditasGroupByOutputType[P]>
        }
      >
    >


  export type KomoditasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_komoditas?: boolean
    nama_komoditas?: boolean
    posisi_x?: boolean
    posisi_y?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    kecamatan?: boolean | Komoditas$kecamatanArgs<ExtArgs>
    hasil_panen?: boolean | Komoditas$hasil_panenArgs<ExtArgs>
    prediksi_panen?: boolean | Komoditas$prediksi_panenArgs<ExtArgs>
    _count?: boolean | KomoditasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["komoditas"]>

  export type KomoditasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_komoditas?: boolean
    nama_komoditas?: boolean
    posisi_x?: boolean
    posisi_y?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["komoditas"]>

  export type KomoditasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_komoditas?: boolean
    nama_komoditas?: boolean
    posisi_x?: boolean
    posisi_y?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["komoditas"]>

  export type KomoditasSelectScalar = {
    id_komoditas?: boolean
    nama_komoditas?: boolean
    posisi_x?: boolean
    posisi_y?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type KomoditasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_komoditas" | "nama_komoditas" | "posisi_x" | "posisi_y" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["komoditas"]>
  export type KomoditasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | Komoditas$kecamatanArgs<ExtArgs>
    hasil_panen?: boolean | Komoditas$hasil_panenArgs<ExtArgs>
    prediksi_panen?: boolean | Komoditas$prediksi_panenArgs<ExtArgs>
    _count?: boolean | KomoditasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KomoditasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KomoditasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KomoditasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Komoditas"
    objects: {
      kecamatan: Prisma.$KecamatanPayload<ExtArgs>[]
      hasil_panen: Prisma.$HasilPanenPayload<ExtArgs>[]
      prediksi_panen: Prisma.$PrediksiPanenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_komoditas: number
      nama_komoditas: string
      posisi_x: number
      posisi_y: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["komoditas"]>
    composites: {}
  }

  type KomoditasGetPayload<S extends boolean | null | undefined | KomoditasDefaultArgs> = $Result.GetResult<Prisma.$KomoditasPayload, S>

  type KomoditasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KomoditasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KomoditasCountAggregateInputType | true
    }

  export interface KomoditasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Komoditas'], meta: { name: 'Komoditas' } }
    /**
     * Find zero or one Komoditas that matches the filter.
     * @param {KomoditasFindUniqueArgs} args - Arguments to find a Komoditas
     * @example
     * // Get one Komoditas
     * const komoditas = await prisma.komoditas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KomoditasFindUniqueArgs>(args: SelectSubset<T, KomoditasFindUniqueArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Komoditas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KomoditasFindUniqueOrThrowArgs} args - Arguments to find a Komoditas
     * @example
     * // Get one Komoditas
     * const komoditas = await prisma.komoditas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KomoditasFindUniqueOrThrowArgs>(args: SelectSubset<T, KomoditasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Komoditas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomoditasFindFirstArgs} args - Arguments to find a Komoditas
     * @example
     * // Get one Komoditas
     * const komoditas = await prisma.komoditas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KomoditasFindFirstArgs>(args?: SelectSubset<T, KomoditasFindFirstArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Komoditas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomoditasFindFirstOrThrowArgs} args - Arguments to find a Komoditas
     * @example
     * // Get one Komoditas
     * const komoditas = await prisma.komoditas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KomoditasFindFirstOrThrowArgs>(args?: SelectSubset<T, KomoditasFindFirstOrThrowArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Komoditas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomoditasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Komoditas
     * const komoditas = await prisma.komoditas.findMany()
     * 
     * // Get first 10 Komoditas
     * const komoditas = await prisma.komoditas.findMany({ take: 10 })
     * 
     * // Only select the `id_komoditas`
     * const komoditasWithId_komoditasOnly = await prisma.komoditas.findMany({ select: { id_komoditas: true } })
     * 
     */
    findMany<T extends KomoditasFindManyArgs>(args?: SelectSubset<T, KomoditasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Komoditas.
     * @param {KomoditasCreateArgs} args - Arguments to create a Komoditas.
     * @example
     * // Create one Komoditas
     * const Komoditas = await prisma.komoditas.create({
     *   data: {
     *     // ... data to create a Komoditas
     *   }
     * })
     * 
     */
    create<T extends KomoditasCreateArgs>(args: SelectSubset<T, KomoditasCreateArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Komoditas.
     * @param {KomoditasCreateManyArgs} args - Arguments to create many Komoditas.
     * @example
     * // Create many Komoditas
     * const komoditas = await prisma.komoditas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KomoditasCreateManyArgs>(args?: SelectSubset<T, KomoditasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Komoditas and returns the data saved in the database.
     * @param {KomoditasCreateManyAndReturnArgs} args - Arguments to create many Komoditas.
     * @example
     * // Create many Komoditas
     * const komoditas = await prisma.komoditas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Komoditas and only return the `id_komoditas`
     * const komoditasWithId_komoditasOnly = await prisma.komoditas.createManyAndReturn({
     *   select: { id_komoditas: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KomoditasCreateManyAndReturnArgs>(args?: SelectSubset<T, KomoditasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Komoditas.
     * @param {KomoditasDeleteArgs} args - Arguments to delete one Komoditas.
     * @example
     * // Delete one Komoditas
     * const Komoditas = await prisma.komoditas.delete({
     *   where: {
     *     // ... filter to delete one Komoditas
     *   }
     * })
     * 
     */
    delete<T extends KomoditasDeleteArgs>(args: SelectSubset<T, KomoditasDeleteArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Komoditas.
     * @param {KomoditasUpdateArgs} args - Arguments to update one Komoditas.
     * @example
     * // Update one Komoditas
     * const komoditas = await prisma.komoditas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KomoditasUpdateArgs>(args: SelectSubset<T, KomoditasUpdateArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Komoditas.
     * @param {KomoditasDeleteManyArgs} args - Arguments to filter Komoditas to delete.
     * @example
     * // Delete a few Komoditas
     * const { count } = await prisma.komoditas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KomoditasDeleteManyArgs>(args?: SelectSubset<T, KomoditasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Komoditas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomoditasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Komoditas
     * const komoditas = await prisma.komoditas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KomoditasUpdateManyArgs>(args: SelectSubset<T, KomoditasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Komoditas and returns the data updated in the database.
     * @param {KomoditasUpdateManyAndReturnArgs} args - Arguments to update many Komoditas.
     * @example
     * // Update many Komoditas
     * const komoditas = await prisma.komoditas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Komoditas and only return the `id_komoditas`
     * const komoditasWithId_komoditasOnly = await prisma.komoditas.updateManyAndReturn({
     *   select: { id_komoditas: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KomoditasUpdateManyAndReturnArgs>(args: SelectSubset<T, KomoditasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Komoditas.
     * @param {KomoditasUpsertArgs} args - Arguments to update or create a Komoditas.
     * @example
     * // Update or create a Komoditas
     * const komoditas = await prisma.komoditas.upsert({
     *   create: {
     *     // ... data to create a Komoditas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Komoditas we want to update
     *   }
     * })
     */
    upsert<T extends KomoditasUpsertArgs>(args: SelectSubset<T, KomoditasUpsertArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Komoditas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomoditasCountArgs} args - Arguments to filter Komoditas to count.
     * @example
     * // Count the number of Komoditas
     * const count = await prisma.komoditas.count({
     *   where: {
     *     // ... the filter for the Komoditas we want to count
     *   }
     * })
    **/
    count<T extends KomoditasCountArgs>(
      args?: Subset<T, KomoditasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KomoditasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Komoditas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomoditasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KomoditasAggregateArgs>(args: Subset<T, KomoditasAggregateArgs>): Prisma.PrismaPromise<GetKomoditasAggregateType<T>>

    /**
     * Group by Komoditas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomoditasGroupByArgs} args - Group by arguments.
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
      T extends KomoditasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KomoditasGroupByArgs['orderBy'] }
        : { orderBy?: KomoditasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KomoditasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKomoditasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Komoditas model
   */
  readonly fields: KomoditasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Komoditas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KomoditasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kecamatan<T extends Komoditas$kecamatanArgs<ExtArgs> = {}>(args?: Subset<T, Komoditas$kecamatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hasil_panen<T extends Komoditas$hasil_panenArgs<ExtArgs> = {}>(args?: Subset<T, Komoditas$hasil_panenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prediksi_panen<T extends Komoditas$prediksi_panenArgs<ExtArgs> = {}>(args?: Subset<T, Komoditas$prediksi_panenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Komoditas model
   */
  interface KomoditasFieldRefs {
    readonly id_komoditas: FieldRef<"Komoditas", 'Int'>
    readonly nama_komoditas: FieldRef<"Komoditas", 'String'>
    readonly posisi_x: FieldRef<"Komoditas", 'Int'>
    readonly posisi_y: FieldRef<"Komoditas", 'Int'>
    readonly created_at: FieldRef<"Komoditas", 'DateTime'>
    readonly updated_at: FieldRef<"Komoditas", 'DateTime'>
    readonly deleted_at: FieldRef<"Komoditas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Komoditas findUnique
   */
  export type KomoditasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomoditasInclude<ExtArgs> | null
    /**
     * Filter, which Komoditas to fetch.
     */
    where: KomoditasWhereUniqueInput
  }

  /**
   * Komoditas findUniqueOrThrow
   */
  export type KomoditasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomoditasInclude<ExtArgs> | null
    /**
     * Filter, which Komoditas to fetch.
     */
    where: KomoditasWhereUniqueInput
  }

  /**
   * Komoditas findFirst
   */
  export type KomoditasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomoditasInclude<ExtArgs> | null
    /**
     * Filter, which Komoditas to fetch.
     */
    where?: KomoditasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Komoditas to fetch.
     */
    orderBy?: KomoditasOrderByWithRelationInput | KomoditasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Komoditas.
     */
    cursor?: KomoditasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Komoditas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Komoditas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Komoditas.
     */
    distinct?: KomoditasScalarFieldEnum | KomoditasScalarFieldEnum[]
  }

  /**
   * Komoditas findFirstOrThrow
   */
  export type KomoditasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomoditasInclude<ExtArgs> | null
    /**
     * Filter, which Komoditas to fetch.
     */
    where?: KomoditasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Komoditas to fetch.
     */
    orderBy?: KomoditasOrderByWithRelationInput | KomoditasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Komoditas.
     */
    cursor?: KomoditasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Komoditas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Komoditas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Komoditas.
     */
    distinct?: KomoditasScalarFieldEnum | KomoditasScalarFieldEnum[]
  }

  /**
   * Komoditas findMany
   */
  export type KomoditasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomoditasInclude<ExtArgs> | null
    /**
     * Filter, which Komoditas to fetch.
     */
    where?: KomoditasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Komoditas to fetch.
     */
    orderBy?: KomoditasOrderByWithRelationInput | KomoditasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Komoditas.
     */
    cursor?: KomoditasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Komoditas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Komoditas.
     */
    skip?: number
    distinct?: KomoditasScalarFieldEnum | KomoditasScalarFieldEnum[]
  }

  /**
   * Komoditas create
   */
  export type KomoditasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomoditasInclude<ExtArgs> | null
    /**
     * The data needed to create a Komoditas.
     */
    data: XOR<KomoditasCreateInput, KomoditasUncheckedCreateInput>
  }

  /**
   * Komoditas createMany
   */
  export type KomoditasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Komoditas.
     */
    data: KomoditasCreateManyInput | KomoditasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Komoditas createManyAndReturn
   */
  export type KomoditasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * The data used to create many Komoditas.
     */
    data: KomoditasCreateManyInput | KomoditasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Komoditas update
   */
  export type KomoditasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomoditasInclude<ExtArgs> | null
    /**
     * The data needed to update a Komoditas.
     */
    data: XOR<KomoditasUpdateInput, KomoditasUncheckedUpdateInput>
    /**
     * Choose, which Komoditas to update.
     */
    where: KomoditasWhereUniqueInput
  }

  /**
   * Komoditas updateMany
   */
  export type KomoditasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Komoditas.
     */
    data: XOR<KomoditasUpdateManyMutationInput, KomoditasUncheckedUpdateManyInput>
    /**
     * Filter which Komoditas to update
     */
    where?: KomoditasWhereInput
    /**
     * Limit how many Komoditas to update.
     */
    limit?: number
  }

  /**
   * Komoditas updateManyAndReturn
   */
  export type KomoditasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * The data used to update Komoditas.
     */
    data: XOR<KomoditasUpdateManyMutationInput, KomoditasUncheckedUpdateManyInput>
    /**
     * Filter which Komoditas to update
     */
    where?: KomoditasWhereInput
    /**
     * Limit how many Komoditas to update.
     */
    limit?: number
  }

  /**
   * Komoditas upsert
   */
  export type KomoditasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomoditasInclude<ExtArgs> | null
    /**
     * The filter to search for the Komoditas to update in case it exists.
     */
    where: KomoditasWhereUniqueInput
    /**
     * In case the Komoditas found by the `where` argument doesn't exist, create a new Komoditas with this data.
     */
    create: XOR<KomoditasCreateInput, KomoditasUncheckedCreateInput>
    /**
     * In case the Komoditas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KomoditasUpdateInput, KomoditasUncheckedUpdateInput>
  }

  /**
   * Komoditas delete
   */
  export type KomoditasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomoditasInclude<ExtArgs> | null
    /**
     * Filter which Komoditas to delete.
     */
    where: KomoditasWhereUniqueInput
  }

  /**
   * Komoditas deleteMany
   */
  export type KomoditasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Komoditas to delete
     */
    where?: KomoditasWhereInput
    /**
     * Limit how many Komoditas to delete.
     */
    limit?: number
  }

  /**
   * Komoditas.kecamatan
   */
  export type Komoditas$kecamatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kecamatan
     */
    select?: KecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kecamatan
     */
    omit?: KecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KecamatanInclude<ExtArgs> | null
    where?: KecamatanWhereInput
    orderBy?: KecamatanOrderByWithRelationInput | KecamatanOrderByWithRelationInput[]
    cursor?: KecamatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
  }

  /**
   * Komoditas.hasil_panen
   */
  export type Komoditas$hasil_panenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    where?: HasilPanenWhereInput
    orderBy?: HasilPanenOrderByWithRelationInput | HasilPanenOrderByWithRelationInput[]
    cursor?: HasilPanenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HasilPanenScalarFieldEnum | HasilPanenScalarFieldEnum[]
  }

  /**
   * Komoditas.prediksi_panen
   */
  export type Komoditas$prediksi_panenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    where?: PrediksiPanenWhereInput
    orderBy?: PrediksiPanenOrderByWithRelationInput | PrediksiPanenOrderByWithRelationInput[]
    cursor?: PrediksiPanenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrediksiPanenScalarFieldEnum | PrediksiPanenScalarFieldEnum[]
  }

  /**
   * Komoditas without action
   */
  export type KomoditasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komoditas
     */
    select?: KomoditasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komoditas
     */
    omit?: KomoditasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomoditasInclude<ExtArgs> | null
  }


  /**
   * Model HasilPanen
   */

  export type AggregateHasilPanen = {
    _count: HasilPanenCountAggregateOutputType | null
    _avg: HasilPanenAvgAggregateOutputType | null
    _sum: HasilPanenSumAggregateOutputType | null
    _min: HasilPanenMinAggregateOutputType | null
    _max: HasilPanenMaxAggregateOutputType | null
  }

  export type HasilPanenAvgAggregateOutputType = {
    id_panen: number | null
    id_kecamatan: number | null
    id_komoditas: number | null
    tahun_panen: number | null
    produksi: number | null
    luas_panen: number | null
    produktivitas: number | null
  }

  export type HasilPanenSumAggregateOutputType = {
    id_panen: number | null
    id_kecamatan: number | null
    id_komoditas: number | null
    tahun_panen: number | null
    produksi: number | null
    luas_panen: number | null
    produktivitas: number | null
  }

  export type HasilPanenMinAggregateOutputType = {
    id_panen: number | null
    id_kecamatan: number | null
    id_komoditas: number | null
    tahun_panen: number | null
    produksi: number | null
    luas_panen: number | null
    produktivitas: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HasilPanenMaxAggregateOutputType = {
    id_panen: number | null
    id_kecamatan: number | null
    id_komoditas: number | null
    tahun_panen: number | null
    produksi: number | null
    luas_panen: number | null
    produktivitas: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HasilPanenCountAggregateOutputType = {
    id_panen: number
    id_kecamatan: number
    id_komoditas: number
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HasilPanenAvgAggregateInputType = {
    id_panen?: true
    id_kecamatan?: true
    id_komoditas?: true
    tahun_panen?: true
    produksi?: true
    luas_panen?: true
    produktivitas?: true
  }

  export type HasilPanenSumAggregateInputType = {
    id_panen?: true
    id_kecamatan?: true
    id_komoditas?: true
    tahun_panen?: true
    produksi?: true
    luas_panen?: true
    produktivitas?: true
  }

  export type HasilPanenMinAggregateInputType = {
    id_panen?: true
    id_kecamatan?: true
    id_komoditas?: true
    tahun_panen?: true
    produksi?: true
    luas_panen?: true
    produktivitas?: true
    created_at?: true
    updated_at?: true
  }

  export type HasilPanenMaxAggregateInputType = {
    id_panen?: true
    id_kecamatan?: true
    id_komoditas?: true
    tahun_panen?: true
    produksi?: true
    luas_panen?: true
    produktivitas?: true
    created_at?: true
    updated_at?: true
  }

  export type HasilPanenCountAggregateInputType = {
    id_panen?: true
    id_kecamatan?: true
    id_komoditas?: true
    tahun_panen?: true
    produksi?: true
    luas_panen?: true
    produktivitas?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HasilPanenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HasilPanen to aggregate.
     */
    where?: HasilPanenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilPanens to fetch.
     */
    orderBy?: HasilPanenOrderByWithRelationInput | HasilPanenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HasilPanenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilPanens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilPanens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HasilPanens
    **/
    _count?: true | HasilPanenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HasilPanenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HasilPanenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HasilPanenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HasilPanenMaxAggregateInputType
  }

  export type GetHasilPanenAggregateType<T extends HasilPanenAggregateArgs> = {
        [P in keyof T & keyof AggregateHasilPanen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHasilPanen[P]>
      : GetScalarType<T[P], AggregateHasilPanen[P]>
  }




  export type HasilPanenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HasilPanenWhereInput
    orderBy?: HasilPanenOrderByWithAggregationInput | HasilPanenOrderByWithAggregationInput[]
    by: HasilPanenScalarFieldEnum[] | HasilPanenScalarFieldEnum
    having?: HasilPanenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HasilPanenCountAggregateInputType | true
    _avg?: HasilPanenAvgAggregateInputType
    _sum?: HasilPanenSumAggregateInputType
    _min?: HasilPanenMinAggregateInputType
    _max?: HasilPanenMaxAggregateInputType
  }

  export type HasilPanenGroupByOutputType = {
    id_panen: number
    id_kecamatan: number
    id_komoditas: number
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at: Date
    updated_at: Date
    _count: HasilPanenCountAggregateOutputType | null
    _avg: HasilPanenAvgAggregateOutputType | null
    _sum: HasilPanenSumAggregateOutputType | null
    _min: HasilPanenMinAggregateOutputType | null
    _max: HasilPanenMaxAggregateOutputType | null
  }

  type GetHasilPanenGroupByPayload<T extends HasilPanenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HasilPanenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HasilPanenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HasilPanenGroupByOutputType[P]>
            : GetScalarType<T[P], HasilPanenGroupByOutputType[P]>
        }
      >
    >


  export type HasilPanenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_panen?: boolean
    id_kecamatan?: boolean
    id_komoditas?: boolean
    tahun_panen?: boolean
    produksi?: boolean
    luas_panen?: boolean
    produktivitas?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasilPanen"]>

  export type HasilPanenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_panen?: boolean
    id_kecamatan?: boolean
    id_komoditas?: boolean
    tahun_panen?: boolean
    produksi?: boolean
    luas_panen?: boolean
    produktivitas?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasilPanen"]>

  export type HasilPanenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_panen?: boolean
    id_kecamatan?: boolean
    id_komoditas?: boolean
    tahun_panen?: boolean
    produksi?: boolean
    luas_panen?: boolean
    produktivitas?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasilPanen"]>

  export type HasilPanenSelectScalar = {
    id_panen?: boolean
    id_kecamatan?: boolean
    id_komoditas?: boolean
    tahun_panen?: boolean
    produksi?: boolean
    luas_panen?: boolean
    produktivitas?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type HasilPanenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_panen" | "id_kecamatan" | "id_komoditas" | "tahun_panen" | "produksi" | "luas_panen" | "produktivitas" | "created_at" | "updated_at", ExtArgs["result"]["hasilPanen"]>
  export type HasilPanenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }
  export type HasilPanenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }
  export type HasilPanenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }

  export type $HasilPanenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HasilPanen"
    objects: {
      kecamatan: Prisma.$KecamatanPayload<ExtArgs>
      komoditas: Prisma.$KomoditasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_panen: number
      id_kecamatan: number
      id_komoditas: number
      tahun_panen: number
      produksi: number
      luas_panen: number
      produktivitas: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["hasilPanen"]>
    composites: {}
  }

  type HasilPanenGetPayload<S extends boolean | null | undefined | HasilPanenDefaultArgs> = $Result.GetResult<Prisma.$HasilPanenPayload, S>

  type HasilPanenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HasilPanenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HasilPanenCountAggregateInputType | true
    }

  export interface HasilPanenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HasilPanen'], meta: { name: 'HasilPanen' } }
    /**
     * Find zero or one HasilPanen that matches the filter.
     * @param {HasilPanenFindUniqueArgs} args - Arguments to find a HasilPanen
     * @example
     * // Get one HasilPanen
     * const hasilPanen = await prisma.hasilPanen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HasilPanenFindUniqueArgs>(args: SelectSubset<T, HasilPanenFindUniqueArgs<ExtArgs>>): Prisma__HasilPanenClient<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HasilPanen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HasilPanenFindUniqueOrThrowArgs} args - Arguments to find a HasilPanen
     * @example
     * // Get one HasilPanen
     * const hasilPanen = await prisma.hasilPanen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HasilPanenFindUniqueOrThrowArgs>(args: SelectSubset<T, HasilPanenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HasilPanenClient<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HasilPanen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilPanenFindFirstArgs} args - Arguments to find a HasilPanen
     * @example
     * // Get one HasilPanen
     * const hasilPanen = await prisma.hasilPanen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HasilPanenFindFirstArgs>(args?: SelectSubset<T, HasilPanenFindFirstArgs<ExtArgs>>): Prisma__HasilPanenClient<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HasilPanen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilPanenFindFirstOrThrowArgs} args - Arguments to find a HasilPanen
     * @example
     * // Get one HasilPanen
     * const hasilPanen = await prisma.hasilPanen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HasilPanenFindFirstOrThrowArgs>(args?: SelectSubset<T, HasilPanenFindFirstOrThrowArgs<ExtArgs>>): Prisma__HasilPanenClient<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HasilPanens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilPanenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HasilPanens
     * const hasilPanens = await prisma.hasilPanen.findMany()
     * 
     * // Get first 10 HasilPanens
     * const hasilPanens = await prisma.hasilPanen.findMany({ take: 10 })
     * 
     * // Only select the `id_panen`
     * const hasilPanenWithId_panenOnly = await prisma.hasilPanen.findMany({ select: { id_panen: true } })
     * 
     */
    findMany<T extends HasilPanenFindManyArgs>(args?: SelectSubset<T, HasilPanenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HasilPanen.
     * @param {HasilPanenCreateArgs} args - Arguments to create a HasilPanen.
     * @example
     * // Create one HasilPanen
     * const HasilPanen = await prisma.hasilPanen.create({
     *   data: {
     *     // ... data to create a HasilPanen
     *   }
     * })
     * 
     */
    create<T extends HasilPanenCreateArgs>(args: SelectSubset<T, HasilPanenCreateArgs<ExtArgs>>): Prisma__HasilPanenClient<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HasilPanens.
     * @param {HasilPanenCreateManyArgs} args - Arguments to create many HasilPanens.
     * @example
     * // Create many HasilPanens
     * const hasilPanen = await prisma.hasilPanen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HasilPanenCreateManyArgs>(args?: SelectSubset<T, HasilPanenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HasilPanens and returns the data saved in the database.
     * @param {HasilPanenCreateManyAndReturnArgs} args - Arguments to create many HasilPanens.
     * @example
     * // Create many HasilPanens
     * const hasilPanen = await prisma.hasilPanen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HasilPanens and only return the `id_panen`
     * const hasilPanenWithId_panenOnly = await prisma.hasilPanen.createManyAndReturn({
     *   select: { id_panen: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HasilPanenCreateManyAndReturnArgs>(args?: SelectSubset<T, HasilPanenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HasilPanen.
     * @param {HasilPanenDeleteArgs} args - Arguments to delete one HasilPanen.
     * @example
     * // Delete one HasilPanen
     * const HasilPanen = await prisma.hasilPanen.delete({
     *   where: {
     *     // ... filter to delete one HasilPanen
     *   }
     * })
     * 
     */
    delete<T extends HasilPanenDeleteArgs>(args: SelectSubset<T, HasilPanenDeleteArgs<ExtArgs>>): Prisma__HasilPanenClient<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HasilPanen.
     * @param {HasilPanenUpdateArgs} args - Arguments to update one HasilPanen.
     * @example
     * // Update one HasilPanen
     * const hasilPanen = await prisma.hasilPanen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HasilPanenUpdateArgs>(args: SelectSubset<T, HasilPanenUpdateArgs<ExtArgs>>): Prisma__HasilPanenClient<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HasilPanens.
     * @param {HasilPanenDeleteManyArgs} args - Arguments to filter HasilPanens to delete.
     * @example
     * // Delete a few HasilPanens
     * const { count } = await prisma.hasilPanen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HasilPanenDeleteManyArgs>(args?: SelectSubset<T, HasilPanenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HasilPanens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilPanenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HasilPanens
     * const hasilPanen = await prisma.hasilPanen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HasilPanenUpdateManyArgs>(args: SelectSubset<T, HasilPanenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HasilPanens and returns the data updated in the database.
     * @param {HasilPanenUpdateManyAndReturnArgs} args - Arguments to update many HasilPanens.
     * @example
     * // Update many HasilPanens
     * const hasilPanen = await prisma.hasilPanen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HasilPanens and only return the `id_panen`
     * const hasilPanenWithId_panenOnly = await prisma.hasilPanen.updateManyAndReturn({
     *   select: { id_panen: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HasilPanenUpdateManyAndReturnArgs>(args: SelectSubset<T, HasilPanenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HasilPanen.
     * @param {HasilPanenUpsertArgs} args - Arguments to update or create a HasilPanen.
     * @example
     * // Update or create a HasilPanen
     * const hasilPanen = await prisma.hasilPanen.upsert({
     *   create: {
     *     // ... data to create a HasilPanen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HasilPanen we want to update
     *   }
     * })
     */
    upsert<T extends HasilPanenUpsertArgs>(args: SelectSubset<T, HasilPanenUpsertArgs<ExtArgs>>): Prisma__HasilPanenClient<$Result.GetResult<Prisma.$HasilPanenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HasilPanens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilPanenCountArgs} args - Arguments to filter HasilPanens to count.
     * @example
     * // Count the number of HasilPanens
     * const count = await prisma.hasilPanen.count({
     *   where: {
     *     // ... the filter for the HasilPanens we want to count
     *   }
     * })
    **/
    count<T extends HasilPanenCountArgs>(
      args?: Subset<T, HasilPanenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HasilPanenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HasilPanen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilPanenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HasilPanenAggregateArgs>(args: Subset<T, HasilPanenAggregateArgs>): Prisma.PrismaPromise<GetHasilPanenAggregateType<T>>

    /**
     * Group by HasilPanen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilPanenGroupByArgs} args - Group by arguments.
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
      T extends HasilPanenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HasilPanenGroupByArgs['orderBy'] }
        : { orderBy?: HasilPanenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HasilPanenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHasilPanenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HasilPanen model
   */
  readonly fields: HasilPanenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HasilPanen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HasilPanenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kecamatan<T extends KecamatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KecamatanDefaultArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    komoditas<T extends KomoditasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KomoditasDefaultArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HasilPanen model
   */
  interface HasilPanenFieldRefs {
    readonly id_panen: FieldRef<"HasilPanen", 'Int'>
    readonly id_kecamatan: FieldRef<"HasilPanen", 'Int'>
    readonly id_komoditas: FieldRef<"HasilPanen", 'Int'>
    readonly tahun_panen: FieldRef<"HasilPanen", 'Int'>
    readonly produksi: FieldRef<"HasilPanen", 'Float'>
    readonly luas_panen: FieldRef<"HasilPanen", 'Float'>
    readonly produktivitas: FieldRef<"HasilPanen", 'Float'>
    readonly created_at: FieldRef<"HasilPanen", 'DateTime'>
    readonly updated_at: FieldRef<"HasilPanen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HasilPanen findUnique
   */
  export type HasilPanenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    /**
     * Filter, which HasilPanen to fetch.
     */
    where: HasilPanenWhereUniqueInput
  }

  /**
   * HasilPanen findUniqueOrThrow
   */
  export type HasilPanenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    /**
     * Filter, which HasilPanen to fetch.
     */
    where: HasilPanenWhereUniqueInput
  }

  /**
   * HasilPanen findFirst
   */
  export type HasilPanenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    /**
     * Filter, which HasilPanen to fetch.
     */
    where?: HasilPanenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilPanens to fetch.
     */
    orderBy?: HasilPanenOrderByWithRelationInput | HasilPanenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HasilPanens.
     */
    cursor?: HasilPanenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilPanens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilPanens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HasilPanens.
     */
    distinct?: HasilPanenScalarFieldEnum | HasilPanenScalarFieldEnum[]
  }

  /**
   * HasilPanen findFirstOrThrow
   */
  export type HasilPanenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    /**
     * Filter, which HasilPanen to fetch.
     */
    where?: HasilPanenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilPanens to fetch.
     */
    orderBy?: HasilPanenOrderByWithRelationInput | HasilPanenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HasilPanens.
     */
    cursor?: HasilPanenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilPanens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilPanens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HasilPanens.
     */
    distinct?: HasilPanenScalarFieldEnum | HasilPanenScalarFieldEnum[]
  }

  /**
   * HasilPanen findMany
   */
  export type HasilPanenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    /**
     * Filter, which HasilPanens to fetch.
     */
    where?: HasilPanenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilPanens to fetch.
     */
    orderBy?: HasilPanenOrderByWithRelationInput | HasilPanenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HasilPanens.
     */
    cursor?: HasilPanenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilPanens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilPanens.
     */
    skip?: number
    distinct?: HasilPanenScalarFieldEnum | HasilPanenScalarFieldEnum[]
  }

  /**
   * HasilPanen create
   */
  export type HasilPanenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    /**
     * The data needed to create a HasilPanen.
     */
    data: XOR<HasilPanenCreateInput, HasilPanenUncheckedCreateInput>
  }

  /**
   * HasilPanen createMany
   */
  export type HasilPanenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HasilPanens.
     */
    data: HasilPanenCreateManyInput | HasilPanenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HasilPanen createManyAndReturn
   */
  export type HasilPanenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * The data used to create many HasilPanens.
     */
    data: HasilPanenCreateManyInput | HasilPanenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HasilPanen update
   */
  export type HasilPanenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    /**
     * The data needed to update a HasilPanen.
     */
    data: XOR<HasilPanenUpdateInput, HasilPanenUncheckedUpdateInput>
    /**
     * Choose, which HasilPanen to update.
     */
    where: HasilPanenWhereUniqueInput
  }

  /**
   * HasilPanen updateMany
   */
  export type HasilPanenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HasilPanens.
     */
    data: XOR<HasilPanenUpdateManyMutationInput, HasilPanenUncheckedUpdateManyInput>
    /**
     * Filter which HasilPanens to update
     */
    where?: HasilPanenWhereInput
    /**
     * Limit how many HasilPanens to update.
     */
    limit?: number
  }

  /**
   * HasilPanen updateManyAndReturn
   */
  export type HasilPanenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * The data used to update HasilPanens.
     */
    data: XOR<HasilPanenUpdateManyMutationInput, HasilPanenUncheckedUpdateManyInput>
    /**
     * Filter which HasilPanens to update
     */
    where?: HasilPanenWhereInput
    /**
     * Limit how many HasilPanens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HasilPanen upsert
   */
  export type HasilPanenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    /**
     * The filter to search for the HasilPanen to update in case it exists.
     */
    where: HasilPanenWhereUniqueInput
    /**
     * In case the HasilPanen found by the `where` argument doesn't exist, create a new HasilPanen with this data.
     */
    create: XOR<HasilPanenCreateInput, HasilPanenUncheckedCreateInput>
    /**
     * In case the HasilPanen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HasilPanenUpdateInput, HasilPanenUncheckedUpdateInput>
  }

  /**
   * HasilPanen delete
   */
  export type HasilPanenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
    /**
     * Filter which HasilPanen to delete.
     */
    where: HasilPanenWhereUniqueInput
  }

  /**
   * HasilPanen deleteMany
   */
  export type HasilPanenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HasilPanens to delete
     */
    where?: HasilPanenWhereInput
    /**
     * Limit how many HasilPanens to delete.
     */
    limit?: number
  }

  /**
   * HasilPanen without action
   */
  export type HasilPanenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilPanen
     */
    select?: HasilPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilPanen
     */
    omit?: HasilPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilPanenInclude<ExtArgs> | null
  }


  /**
   * Model PrediksiPanen
   */

  export type AggregatePrediksiPanen = {
    _count: PrediksiPanenCountAggregateOutputType | null
    _avg: PrediksiPanenAvgAggregateOutputType | null
    _sum: PrediksiPanenSumAggregateOutputType | null
    _min: PrediksiPanenMinAggregateOutputType | null
    _max: PrediksiPanenMaxAggregateOutputType | null
  }

  export type PrediksiPanenAvgAggregateOutputType = {
    id_prediksi: number | null
    id_kecamatan: number | null
    id_komoditas: number | null
    tahun_prediksi: number | null
    hasil_prediksi: number | null
  }

  export type PrediksiPanenSumAggregateOutputType = {
    id_prediksi: number | null
    id_kecamatan: number | null
    id_komoditas: number | null
    tahun_prediksi: number | null
    hasil_prediksi: number | null
  }

  export type PrediksiPanenMinAggregateOutputType = {
    id_prediksi: number | null
    id_kecamatan: number | null
    id_komoditas: number | null
    tahun_prediksi: number | null
    hasil_prediksi: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PrediksiPanenMaxAggregateOutputType = {
    id_prediksi: number | null
    id_kecamatan: number | null
    id_komoditas: number | null
    tahun_prediksi: number | null
    hasil_prediksi: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PrediksiPanenCountAggregateOutputType = {
    id_prediksi: number
    id_kecamatan: number
    id_komoditas: number
    tahun_prediksi: number
    hasil_prediksi: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PrediksiPanenAvgAggregateInputType = {
    id_prediksi?: true
    id_kecamatan?: true
    id_komoditas?: true
    tahun_prediksi?: true
    hasil_prediksi?: true
  }

  export type PrediksiPanenSumAggregateInputType = {
    id_prediksi?: true
    id_kecamatan?: true
    id_komoditas?: true
    tahun_prediksi?: true
    hasil_prediksi?: true
  }

  export type PrediksiPanenMinAggregateInputType = {
    id_prediksi?: true
    id_kecamatan?: true
    id_komoditas?: true
    tahun_prediksi?: true
    hasil_prediksi?: true
    created_at?: true
    updated_at?: true
  }

  export type PrediksiPanenMaxAggregateInputType = {
    id_prediksi?: true
    id_kecamatan?: true
    id_komoditas?: true
    tahun_prediksi?: true
    hasil_prediksi?: true
    created_at?: true
    updated_at?: true
  }

  export type PrediksiPanenCountAggregateInputType = {
    id_prediksi?: true
    id_kecamatan?: true
    id_komoditas?: true
    tahun_prediksi?: true
    hasil_prediksi?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PrediksiPanenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrediksiPanen to aggregate.
     */
    where?: PrediksiPanenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrediksiPanens to fetch.
     */
    orderBy?: PrediksiPanenOrderByWithRelationInput | PrediksiPanenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrediksiPanenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrediksiPanens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrediksiPanens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrediksiPanens
    **/
    _count?: true | PrediksiPanenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrediksiPanenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrediksiPanenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrediksiPanenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrediksiPanenMaxAggregateInputType
  }

  export type GetPrediksiPanenAggregateType<T extends PrediksiPanenAggregateArgs> = {
        [P in keyof T & keyof AggregatePrediksiPanen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrediksiPanen[P]>
      : GetScalarType<T[P], AggregatePrediksiPanen[P]>
  }




  export type PrediksiPanenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrediksiPanenWhereInput
    orderBy?: PrediksiPanenOrderByWithAggregationInput | PrediksiPanenOrderByWithAggregationInput[]
    by: PrediksiPanenScalarFieldEnum[] | PrediksiPanenScalarFieldEnum
    having?: PrediksiPanenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrediksiPanenCountAggregateInputType | true
    _avg?: PrediksiPanenAvgAggregateInputType
    _sum?: PrediksiPanenSumAggregateInputType
    _min?: PrediksiPanenMinAggregateInputType
    _max?: PrediksiPanenMaxAggregateInputType
  }

  export type PrediksiPanenGroupByOutputType = {
    id_prediksi: number
    id_kecamatan: number
    id_komoditas: number
    tahun_prediksi: number
    hasil_prediksi: number
    created_at: Date
    updated_at: Date
    _count: PrediksiPanenCountAggregateOutputType | null
    _avg: PrediksiPanenAvgAggregateOutputType | null
    _sum: PrediksiPanenSumAggregateOutputType | null
    _min: PrediksiPanenMinAggregateOutputType | null
    _max: PrediksiPanenMaxAggregateOutputType | null
  }

  type GetPrediksiPanenGroupByPayload<T extends PrediksiPanenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrediksiPanenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrediksiPanenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrediksiPanenGroupByOutputType[P]>
            : GetScalarType<T[P], PrediksiPanenGroupByOutputType[P]>
        }
      >
    >


  export type PrediksiPanenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prediksi?: boolean
    id_kecamatan?: boolean
    id_komoditas?: boolean
    tahun_prediksi?: boolean
    hasil_prediksi?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediksiPanen"]>

  export type PrediksiPanenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prediksi?: boolean
    id_kecamatan?: boolean
    id_komoditas?: boolean
    tahun_prediksi?: boolean
    hasil_prediksi?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediksiPanen"]>

  export type PrediksiPanenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prediksi?: boolean
    id_kecamatan?: boolean
    id_komoditas?: boolean
    tahun_prediksi?: boolean
    hasil_prediksi?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediksiPanen"]>

  export type PrediksiPanenSelectScalar = {
    id_prediksi?: boolean
    id_kecamatan?: boolean
    id_komoditas?: boolean
    tahun_prediksi?: boolean
    hasil_prediksi?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PrediksiPanenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prediksi" | "id_kecamatan" | "id_komoditas" | "tahun_prediksi" | "hasil_prediksi" | "created_at" | "updated_at", ExtArgs["result"]["prediksiPanen"]>
  export type PrediksiPanenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }
  export type PrediksiPanenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }
  export type PrediksiPanenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | KecamatanDefaultArgs<ExtArgs>
    komoditas?: boolean | KomoditasDefaultArgs<ExtArgs>
  }

  export type $PrediksiPanenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrediksiPanen"
    objects: {
      kecamatan: Prisma.$KecamatanPayload<ExtArgs>
      komoditas: Prisma.$KomoditasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prediksi: number
      id_kecamatan: number
      id_komoditas: number
      tahun_prediksi: number
      hasil_prediksi: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["prediksiPanen"]>
    composites: {}
  }

  type PrediksiPanenGetPayload<S extends boolean | null | undefined | PrediksiPanenDefaultArgs> = $Result.GetResult<Prisma.$PrediksiPanenPayload, S>

  type PrediksiPanenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrediksiPanenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrediksiPanenCountAggregateInputType | true
    }

  export interface PrediksiPanenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrediksiPanen'], meta: { name: 'PrediksiPanen' } }
    /**
     * Find zero or one PrediksiPanen that matches the filter.
     * @param {PrediksiPanenFindUniqueArgs} args - Arguments to find a PrediksiPanen
     * @example
     * // Get one PrediksiPanen
     * const prediksiPanen = await prisma.prediksiPanen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrediksiPanenFindUniqueArgs>(args: SelectSubset<T, PrediksiPanenFindUniqueArgs<ExtArgs>>): Prisma__PrediksiPanenClient<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrediksiPanen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrediksiPanenFindUniqueOrThrowArgs} args - Arguments to find a PrediksiPanen
     * @example
     * // Get one PrediksiPanen
     * const prediksiPanen = await prisma.prediksiPanen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrediksiPanenFindUniqueOrThrowArgs>(args: SelectSubset<T, PrediksiPanenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrediksiPanenClient<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrediksiPanen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrediksiPanenFindFirstArgs} args - Arguments to find a PrediksiPanen
     * @example
     * // Get one PrediksiPanen
     * const prediksiPanen = await prisma.prediksiPanen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrediksiPanenFindFirstArgs>(args?: SelectSubset<T, PrediksiPanenFindFirstArgs<ExtArgs>>): Prisma__PrediksiPanenClient<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrediksiPanen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrediksiPanenFindFirstOrThrowArgs} args - Arguments to find a PrediksiPanen
     * @example
     * // Get one PrediksiPanen
     * const prediksiPanen = await prisma.prediksiPanen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrediksiPanenFindFirstOrThrowArgs>(args?: SelectSubset<T, PrediksiPanenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrediksiPanenClient<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrediksiPanens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrediksiPanenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrediksiPanens
     * const prediksiPanens = await prisma.prediksiPanen.findMany()
     * 
     * // Get first 10 PrediksiPanens
     * const prediksiPanens = await prisma.prediksiPanen.findMany({ take: 10 })
     * 
     * // Only select the `id_prediksi`
     * const prediksiPanenWithId_prediksiOnly = await prisma.prediksiPanen.findMany({ select: { id_prediksi: true } })
     * 
     */
    findMany<T extends PrediksiPanenFindManyArgs>(args?: SelectSubset<T, PrediksiPanenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrediksiPanen.
     * @param {PrediksiPanenCreateArgs} args - Arguments to create a PrediksiPanen.
     * @example
     * // Create one PrediksiPanen
     * const PrediksiPanen = await prisma.prediksiPanen.create({
     *   data: {
     *     // ... data to create a PrediksiPanen
     *   }
     * })
     * 
     */
    create<T extends PrediksiPanenCreateArgs>(args: SelectSubset<T, PrediksiPanenCreateArgs<ExtArgs>>): Prisma__PrediksiPanenClient<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrediksiPanens.
     * @param {PrediksiPanenCreateManyArgs} args - Arguments to create many PrediksiPanens.
     * @example
     * // Create many PrediksiPanens
     * const prediksiPanen = await prisma.prediksiPanen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrediksiPanenCreateManyArgs>(args?: SelectSubset<T, PrediksiPanenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrediksiPanens and returns the data saved in the database.
     * @param {PrediksiPanenCreateManyAndReturnArgs} args - Arguments to create many PrediksiPanens.
     * @example
     * // Create many PrediksiPanens
     * const prediksiPanen = await prisma.prediksiPanen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrediksiPanens and only return the `id_prediksi`
     * const prediksiPanenWithId_prediksiOnly = await prisma.prediksiPanen.createManyAndReturn({
     *   select: { id_prediksi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrediksiPanenCreateManyAndReturnArgs>(args?: SelectSubset<T, PrediksiPanenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrediksiPanen.
     * @param {PrediksiPanenDeleteArgs} args - Arguments to delete one PrediksiPanen.
     * @example
     * // Delete one PrediksiPanen
     * const PrediksiPanen = await prisma.prediksiPanen.delete({
     *   where: {
     *     // ... filter to delete one PrediksiPanen
     *   }
     * })
     * 
     */
    delete<T extends PrediksiPanenDeleteArgs>(args: SelectSubset<T, PrediksiPanenDeleteArgs<ExtArgs>>): Prisma__PrediksiPanenClient<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrediksiPanen.
     * @param {PrediksiPanenUpdateArgs} args - Arguments to update one PrediksiPanen.
     * @example
     * // Update one PrediksiPanen
     * const prediksiPanen = await prisma.prediksiPanen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrediksiPanenUpdateArgs>(args: SelectSubset<T, PrediksiPanenUpdateArgs<ExtArgs>>): Prisma__PrediksiPanenClient<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrediksiPanens.
     * @param {PrediksiPanenDeleteManyArgs} args - Arguments to filter PrediksiPanens to delete.
     * @example
     * // Delete a few PrediksiPanens
     * const { count } = await prisma.prediksiPanen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrediksiPanenDeleteManyArgs>(args?: SelectSubset<T, PrediksiPanenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrediksiPanens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrediksiPanenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrediksiPanens
     * const prediksiPanen = await prisma.prediksiPanen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrediksiPanenUpdateManyArgs>(args: SelectSubset<T, PrediksiPanenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrediksiPanens and returns the data updated in the database.
     * @param {PrediksiPanenUpdateManyAndReturnArgs} args - Arguments to update many PrediksiPanens.
     * @example
     * // Update many PrediksiPanens
     * const prediksiPanen = await prisma.prediksiPanen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrediksiPanens and only return the `id_prediksi`
     * const prediksiPanenWithId_prediksiOnly = await prisma.prediksiPanen.updateManyAndReturn({
     *   select: { id_prediksi: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrediksiPanenUpdateManyAndReturnArgs>(args: SelectSubset<T, PrediksiPanenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrediksiPanen.
     * @param {PrediksiPanenUpsertArgs} args - Arguments to update or create a PrediksiPanen.
     * @example
     * // Update or create a PrediksiPanen
     * const prediksiPanen = await prisma.prediksiPanen.upsert({
     *   create: {
     *     // ... data to create a PrediksiPanen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrediksiPanen we want to update
     *   }
     * })
     */
    upsert<T extends PrediksiPanenUpsertArgs>(args: SelectSubset<T, PrediksiPanenUpsertArgs<ExtArgs>>): Prisma__PrediksiPanenClient<$Result.GetResult<Prisma.$PrediksiPanenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrediksiPanens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrediksiPanenCountArgs} args - Arguments to filter PrediksiPanens to count.
     * @example
     * // Count the number of PrediksiPanens
     * const count = await prisma.prediksiPanen.count({
     *   where: {
     *     // ... the filter for the PrediksiPanens we want to count
     *   }
     * })
    **/
    count<T extends PrediksiPanenCountArgs>(
      args?: Subset<T, PrediksiPanenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrediksiPanenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrediksiPanen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrediksiPanenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrediksiPanenAggregateArgs>(args: Subset<T, PrediksiPanenAggregateArgs>): Prisma.PrismaPromise<GetPrediksiPanenAggregateType<T>>

    /**
     * Group by PrediksiPanen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrediksiPanenGroupByArgs} args - Group by arguments.
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
      T extends PrediksiPanenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrediksiPanenGroupByArgs['orderBy'] }
        : { orderBy?: PrediksiPanenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrediksiPanenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrediksiPanenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrediksiPanen model
   */
  readonly fields: PrediksiPanenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrediksiPanen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrediksiPanenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kecamatan<T extends KecamatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KecamatanDefaultArgs<ExtArgs>>): Prisma__KecamatanClient<$Result.GetResult<Prisma.$KecamatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    komoditas<T extends KomoditasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KomoditasDefaultArgs<ExtArgs>>): Prisma__KomoditasClient<$Result.GetResult<Prisma.$KomoditasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrediksiPanen model
   */
  interface PrediksiPanenFieldRefs {
    readonly id_prediksi: FieldRef<"PrediksiPanen", 'Int'>
    readonly id_kecamatan: FieldRef<"PrediksiPanen", 'Int'>
    readonly id_komoditas: FieldRef<"PrediksiPanen", 'Int'>
    readonly tahun_prediksi: FieldRef<"PrediksiPanen", 'Int'>
    readonly hasil_prediksi: FieldRef<"PrediksiPanen", 'Int'>
    readonly created_at: FieldRef<"PrediksiPanen", 'DateTime'>
    readonly updated_at: FieldRef<"PrediksiPanen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrediksiPanen findUnique
   */
  export type PrediksiPanenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    /**
     * Filter, which PrediksiPanen to fetch.
     */
    where: PrediksiPanenWhereUniqueInput
  }

  /**
   * PrediksiPanen findUniqueOrThrow
   */
  export type PrediksiPanenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    /**
     * Filter, which PrediksiPanen to fetch.
     */
    where: PrediksiPanenWhereUniqueInput
  }

  /**
   * PrediksiPanen findFirst
   */
  export type PrediksiPanenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    /**
     * Filter, which PrediksiPanen to fetch.
     */
    where?: PrediksiPanenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrediksiPanens to fetch.
     */
    orderBy?: PrediksiPanenOrderByWithRelationInput | PrediksiPanenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrediksiPanens.
     */
    cursor?: PrediksiPanenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrediksiPanens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrediksiPanens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrediksiPanens.
     */
    distinct?: PrediksiPanenScalarFieldEnum | PrediksiPanenScalarFieldEnum[]
  }

  /**
   * PrediksiPanen findFirstOrThrow
   */
  export type PrediksiPanenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    /**
     * Filter, which PrediksiPanen to fetch.
     */
    where?: PrediksiPanenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrediksiPanens to fetch.
     */
    orderBy?: PrediksiPanenOrderByWithRelationInput | PrediksiPanenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrediksiPanens.
     */
    cursor?: PrediksiPanenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrediksiPanens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrediksiPanens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrediksiPanens.
     */
    distinct?: PrediksiPanenScalarFieldEnum | PrediksiPanenScalarFieldEnum[]
  }

  /**
   * PrediksiPanen findMany
   */
  export type PrediksiPanenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    /**
     * Filter, which PrediksiPanens to fetch.
     */
    where?: PrediksiPanenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrediksiPanens to fetch.
     */
    orderBy?: PrediksiPanenOrderByWithRelationInput | PrediksiPanenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrediksiPanens.
     */
    cursor?: PrediksiPanenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrediksiPanens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrediksiPanens.
     */
    skip?: number
    distinct?: PrediksiPanenScalarFieldEnum | PrediksiPanenScalarFieldEnum[]
  }

  /**
   * PrediksiPanen create
   */
  export type PrediksiPanenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    /**
     * The data needed to create a PrediksiPanen.
     */
    data: XOR<PrediksiPanenCreateInput, PrediksiPanenUncheckedCreateInput>
  }

  /**
   * PrediksiPanen createMany
   */
  export type PrediksiPanenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrediksiPanens.
     */
    data: PrediksiPanenCreateManyInput | PrediksiPanenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrediksiPanen createManyAndReturn
   */
  export type PrediksiPanenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * The data used to create many PrediksiPanens.
     */
    data: PrediksiPanenCreateManyInput | PrediksiPanenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrediksiPanen update
   */
  export type PrediksiPanenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    /**
     * The data needed to update a PrediksiPanen.
     */
    data: XOR<PrediksiPanenUpdateInput, PrediksiPanenUncheckedUpdateInput>
    /**
     * Choose, which PrediksiPanen to update.
     */
    where: PrediksiPanenWhereUniqueInput
  }

  /**
   * PrediksiPanen updateMany
   */
  export type PrediksiPanenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrediksiPanens.
     */
    data: XOR<PrediksiPanenUpdateManyMutationInput, PrediksiPanenUncheckedUpdateManyInput>
    /**
     * Filter which PrediksiPanens to update
     */
    where?: PrediksiPanenWhereInput
    /**
     * Limit how many PrediksiPanens to update.
     */
    limit?: number
  }

  /**
   * PrediksiPanen updateManyAndReturn
   */
  export type PrediksiPanenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * The data used to update PrediksiPanens.
     */
    data: XOR<PrediksiPanenUpdateManyMutationInput, PrediksiPanenUncheckedUpdateManyInput>
    /**
     * Filter which PrediksiPanens to update
     */
    where?: PrediksiPanenWhereInput
    /**
     * Limit how many PrediksiPanens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrediksiPanen upsert
   */
  export type PrediksiPanenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    /**
     * The filter to search for the PrediksiPanen to update in case it exists.
     */
    where: PrediksiPanenWhereUniqueInput
    /**
     * In case the PrediksiPanen found by the `where` argument doesn't exist, create a new PrediksiPanen with this data.
     */
    create: XOR<PrediksiPanenCreateInput, PrediksiPanenUncheckedCreateInput>
    /**
     * In case the PrediksiPanen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrediksiPanenUpdateInput, PrediksiPanenUncheckedUpdateInput>
  }

  /**
   * PrediksiPanen delete
   */
  export type PrediksiPanenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
    /**
     * Filter which PrediksiPanen to delete.
     */
    where: PrediksiPanenWhereUniqueInput
  }

  /**
   * PrediksiPanen deleteMany
   */
  export type PrediksiPanenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrediksiPanens to delete
     */
    where?: PrediksiPanenWhereInput
    /**
     * Limit how many PrediksiPanens to delete.
     */
    limit?: number
  }

  /**
   * PrediksiPanen without action
   */
  export type PrediksiPanenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrediksiPanen
     */
    select?: PrediksiPanenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrediksiPanen
     */
    omit?: PrediksiPanenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrediksiPanenInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    email_verified: 'email_verified',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DetailScalarFieldEnum: {
    tax_id: 'tax_id',
    phone: 'phone',
    bio: 'bio',
    city: 'city',
    county: 'county',
    post_kode: 'post_kode',
    photo_profile: 'photo_profile'
  };

  export type DetailScalarFieldEnum = (typeof DetailScalarFieldEnum)[keyof typeof DetailScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    id_provider: 'id_provider',
    id_token: 'id_token',
    type: 'type',
    scope: 'scope',
    provider: 'provider',
    expires_at: 'expires_at',
    token_type: 'token_type',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    session_token: 'session_token',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const KecamatanScalarFieldEnum: {
    id_kecamatan: 'id_kecamatan',
    id_komoditas: 'id_komoditas',
    nama_kecamatan: 'nama_kecamatan',
    deskripsi: 'deskripsi',
    gambar: 'gambar',
    area: 'area',
    posisi_x: 'posisi_x',
    posisi_y: 'posisi_y',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type KecamatanScalarFieldEnum = (typeof KecamatanScalarFieldEnum)[keyof typeof KecamatanScalarFieldEnum]


  export const PendudukScalarFieldEnum: {
    id_penduduk: 'id_penduduk',
    id_kecamatan: 'id_kecamatan',
    data_tahun: 'data_tahun',
    jumlah_penduduk: 'jumlah_penduduk',
    laju_pertumbuhan: 'laju_pertumbuhan',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PendudukScalarFieldEnum = (typeof PendudukScalarFieldEnum)[keyof typeof PendudukScalarFieldEnum]


  export const KomoditasScalarFieldEnum: {
    id_komoditas: 'id_komoditas',
    nama_komoditas: 'nama_komoditas',
    posisi_x: 'posisi_x',
    posisi_y: 'posisi_y',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type KomoditasScalarFieldEnum = (typeof KomoditasScalarFieldEnum)[keyof typeof KomoditasScalarFieldEnum]


  export const HasilPanenScalarFieldEnum: {
    id_panen: 'id_panen',
    id_kecamatan: 'id_kecamatan',
    id_komoditas: 'id_komoditas',
    tahun_panen: 'tahun_panen',
    produksi: 'produksi',
    luas_panen: 'luas_panen',
    produktivitas: 'produktivitas',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HasilPanenScalarFieldEnum = (typeof HasilPanenScalarFieldEnum)[keyof typeof HasilPanenScalarFieldEnum]


  export const PrediksiPanenScalarFieldEnum: {
    id_prediksi: 'id_prediksi',
    id_kecamatan: 'id_kecamatan',
    id_komoditas: 'id_komoditas',
    tahun_prediksi: 'tahun_prediksi',
    hasil_prediksi: 'hasil_prediksi',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PrediksiPanenScalarFieldEnum = (typeof PrediksiPanenScalarFieldEnum)[keyof typeof PrediksiPanenScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    email_verified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    detail?: XOR<DetailNullableScalarRelationFilter, DetailWhereInput> | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    email_verified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    detail?: DetailOrderByWithRelationInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    email_verified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    detail?: XOR<DetailNullableScalarRelationFilter, DetailWhereInput> | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    email_verified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    email_verified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DetailWhereInput = {
    AND?: DetailWhereInput | DetailWhereInput[]
    OR?: DetailWhereInput[]
    NOT?: DetailWhereInput | DetailWhereInput[]
    tax_id?: StringFilter<"Detail"> | string
    phone?: StringFilter<"Detail"> | string
    bio?: StringFilter<"Detail"> | string
    city?: StringFilter<"Detail"> | string
    county?: StringFilter<"Detail"> | string
    post_kode?: StringFilter<"Detail"> | string
    photo_profile?: StringFilter<"Detail"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DetailOrderByWithRelationInput = {
    tax_id?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    city?: SortOrder
    county?: SortOrder
    post_kode?: SortOrder
    photo_profile?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DetailWhereUniqueInput = Prisma.AtLeast<{
    tax_id?: string
    AND?: DetailWhereInput | DetailWhereInput[]
    OR?: DetailWhereInput[]
    NOT?: DetailWhereInput | DetailWhereInput[]
    phone?: StringFilter<"Detail"> | string
    bio?: StringFilter<"Detail"> | string
    city?: StringFilter<"Detail"> | string
    county?: StringFilter<"Detail"> | string
    post_kode?: StringFilter<"Detail"> | string
    photo_profile?: StringFilter<"Detail"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "tax_id">

  export type DetailOrderByWithAggregationInput = {
    tax_id?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    city?: SortOrder
    county?: SortOrder
    post_kode?: SortOrder
    photo_profile?: SortOrder
    _count?: DetailCountOrderByAggregateInput
    _max?: DetailMaxOrderByAggregateInput
    _min?: DetailMinOrderByAggregateInput
  }

  export type DetailScalarWhereWithAggregatesInput = {
    AND?: DetailScalarWhereWithAggregatesInput | DetailScalarWhereWithAggregatesInput[]
    OR?: DetailScalarWhereWithAggregatesInput[]
    NOT?: DetailScalarWhereWithAggregatesInput | DetailScalarWhereWithAggregatesInput[]
    tax_id?: StringWithAggregatesFilter<"Detail"> | string
    phone?: StringWithAggregatesFilter<"Detail"> | string
    bio?: StringWithAggregatesFilter<"Detail"> | string
    city?: StringWithAggregatesFilter<"Detail"> | string
    county?: StringWithAggregatesFilter<"Detail"> | string
    post_kode?: StringWithAggregatesFilter<"Detail"> | string
    photo_profile?: StringWithAggregatesFilter<"Detail"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    id_user?: StringFilter<"Account"> | string
    id_provider?: StringFilter<"Account"> | string
    id_token?: StringNullableFilter<"Account"> | string | null
    type?: StringFilter<"Account"> | string
    scope?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    refresh_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_provider?: SortOrder
    id_token?: SortOrderInput | SortOrder
    type?: SortOrder
    scope?: SortOrderInput | SortOrder
    provider?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_id_provider?: AccountProviderId_providerCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id_user?: StringFilter<"Account"> | string
    id_provider?: StringFilter<"Account"> | string
    id_token?: StringNullableFilter<"Account"> | string | null
    type?: StringFilter<"Account"> | string
    scope?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    refresh_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_id_provider">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_provider?: SortOrder
    id_token?: SortOrderInput | SortOrder
    type?: SortOrder
    scope?: SortOrderInput | SortOrder
    provider?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    id_user?: StringWithAggregatesFilter<"Account"> | string
    id_provider?: StringWithAggregatesFilter<"Account"> | string
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    type?: StringWithAggregatesFilter<"Account"> | string
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    provider?: StringWithAggregatesFilter<"Account"> | string
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    id_user?: StringFilter<"Session"> | string
    session_token?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    session_token?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    session_token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id_user?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "session_token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    session_token?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    id_user?: StringWithAggregatesFilter<"Session"> | string
    session_token?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type KecamatanWhereInput = {
    AND?: KecamatanWhereInput | KecamatanWhereInput[]
    OR?: KecamatanWhereInput[]
    NOT?: KecamatanWhereInput | KecamatanWhereInput[]
    id_kecamatan?: IntFilter<"Kecamatan"> | number
    id_komoditas?: IntFilter<"Kecamatan"> | number
    nama_kecamatan?: StringFilter<"Kecamatan"> | string
    deskripsi?: StringFilter<"Kecamatan"> | string
    gambar?: StringFilter<"Kecamatan"> | string
    area?: FloatFilter<"Kecamatan"> | number
    posisi_x?: IntFilter<"Kecamatan"> | number
    posisi_y?: IntFilter<"Kecamatan"> | number
    created_at?: DateTimeFilter<"Kecamatan"> | Date | string
    updated_at?: DateTimeFilter<"Kecamatan"> | Date | string
    komoditas?: XOR<KomoditasScalarRelationFilter, KomoditasWhereInput>
    penduduk?: PendudukListRelationFilter
    hasil_panen?: HasilPanenListRelationFilter
    prediksi_panen?: PrediksiPanenListRelationFilter
  }

  export type KecamatanOrderByWithRelationInput = {
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    nama_kecamatan?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    area?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    komoditas?: KomoditasOrderByWithRelationInput
    penduduk?: PendudukOrderByRelationAggregateInput
    hasil_panen?: HasilPanenOrderByRelationAggregateInput
    prediksi_panen?: PrediksiPanenOrderByRelationAggregateInput
  }

  export type KecamatanWhereUniqueInput = Prisma.AtLeast<{
    id_kecamatan?: number
    AND?: KecamatanWhereInput | KecamatanWhereInput[]
    OR?: KecamatanWhereInput[]
    NOT?: KecamatanWhereInput | KecamatanWhereInput[]
    id_komoditas?: IntFilter<"Kecamatan"> | number
    nama_kecamatan?: StringFilter<"Kecamatan"> | string
    deskripsi?: StringFilter<"Kecamatan"> | string
    gambar?: StringFilter<"Kecamatan"> | string
    area?: FloatFilter<"Kecamatan"> | number
    posisi_x?: IntFilter<"Kecamatan"> | number
    posisi_y?: IntFilter<"Kecamatan"> | number
    created_at?: DateTimeFilter<"Kecamatan"> | Date | string
    updated_at?: DateTimeFilter<"Kecamatan"> | Date | string
    komoditas?: XOR<KomoditasScalarRelationFilter, KomoditasWhereInput>
    penduduk?: PendudukListRelationFilter
    hasil_panen?: HasilPanenListRelationFilter
    prediksi_panen?: PrediksiPanenListRelationFilter
  }, "id_kecamatan">

  export type KecamatanOrderByWithAggregationInput = {
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    nama_kecamatan?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    area?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: KecamatanCountOrderByAggregateInput
    _avg?: KecamatanAvgOrderByAggregateInput
    _max?: KecamatanMaxOrderByAggregateInput
    _min?: KecamatanMinOrderByAggregateInput
    _sum?: KecamatanSumOrderByAggregateInput
  }

  export type KecamatanScalarWhereWithAggregatesInput = {
    AND?: KecamatanScalarWhereWithAggregatesInput | KecamatanScalarWhereWithAggregatesInput[]
    OR?: KecamatanScalarWhereWithAggregatesInput[]
    NOT?: KecamatanScalarWhereWithAggregatesInput | KecamatanScalarWhereWithAggregatesInput[]
    id_kecamatan?: IntWithAggregatesFilter<"Kecamatan"> | number
    id_komoditas?: IntWithAggregatesFilter<"Kecamatan"> | number
    nama_kecamatan?: StringWithAggregatesFilter<"Kecamatan"> | string
    deskripsi?: StringWithAggregatesFilter<"Kecamatan"> | string
    gambar?: StringWithAggregatesFilter<"Kecamatan"> | string
    area?: FloatWithAggregatesFilter<"Kecamatan"> | number
    posisi_x?: IntWithAggregatesFilter<"Kecamatan"> | number
    posisi_y?: IntWithAggregatesFilter<"Kecamatan"> | number
    created_at?: DateTimeWithAggregatesFilter<"Kecamatan"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Kecamatan"> | Date | string
  }

  export type PendudukWhereInput = {
    AND?: PendudukWhereInput | PendudukWhereInput[]
    OR?: PendudukWhereInput[]
    NOT?: PendudukWhereInput | PendudukWhereInput[]
    id_penduduk?: IntFilter<"Penduduk"> | number
    id_kecamatan?: IntFilter<"Penduduk"> | number
    data_tahun?: IntFilter<"Penduduk"> | number
    jumlah_penduduk?: FloatFilter<"Penduduk"> | number
    laju_pertumbuhan?: StringFilter<"Penduduk"> | string
    created_at?: DateTimeFilter<"Penduduk"> | Date | string
    updated_at?: DateTimeFilter<"Penduduk"> | Date | string
    kecamatan?: XOR<KecamatanScalarRelationFilter, KecamatanWhereInput>
  }

  export type PendudukOrderByWithRelationInput = {
    id_penduduk?: SortOrder
    id_kecamatan?: SortOrder
    data_tahun?: SortOrder
    jumlah_penduduk?: SortOrder
    laju_pertumbuhan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    kecamatan?: KecamatanOrderByWithRelationInput
  }

  export type PendudukWhereUniqueInput = Prisma.AtLeast<{
    id_penduduk?: number
    AND?: PendudukWhereInput | PendudukWhereInput[]
    OR?: PendudukWhereInput[]
    NOT?: PendudukWhereInput | PendudukWhereInput[]
    id_kecamatan?: IntFilter<"Penduduk"> | number
    data_tahun?: IntFilter<"Penduduk"> | number
    jumlah_penduduk?: FloatFilter<"Penduduk"> | number
    laju_pertumbuhan?: StringFilter<"Penduduk"> | string
    created_at?: DateTimeFilter<"Penduduk"> | Date | string
    updated_at?: DateTimeFilter<"Penduduk"> | Date | string
    kecamatan?: XOR<KecamatanScalarRelationFilter, KecamatanWhereInput>
  }, "id_penduduk">

  export type PendudukOrderByWithAggregationInput = {
    id_penduduk?: SortOrder
    id_kecamatan?: SortOrder
    data_tahun?: SortOrder
    jumlah_penduduk?: SortOrder
    laju_pertumbuhan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PendudukCountOrderByAggregateInput
    _avg?: PendudukAvgOrderByAggregateInput
    _max?: PendudukMaxOrderByAggregateInput
    _min?: PendudukMinOrderByAggregateInput
    _sum?: PendudukSumOrderByAggregateInput
  }

  export type PendudukScalarWhereWithAggregatesInput = {
    AND?: PendudukScalarWhereWithAggregatesInput | PendudukScalarWhereWithAggregatesInput[]
    OR?: PendudukScalarWhereWithAggregatesInput[]
    NOT?: PendudukScalarWhereWithAggregatesInput | PendudukScalarWhereWithAggregatesInput[]
    id_penduduk?: IntWithAggregatesFilter<"Penduduk"> | number
    id_kecamatan?: IntWithAggregatesFilter<"Penduduk"> | number
    data_tahun?: IntWithAggregatesFilter<"Penduduk"> | number
    jumlah_penduduk?: FloatWithAggregatesFilter<"Penduduk"> | number
    laju_pertumbuhan?: StringWithAggregatesFilter<"Penduduk"> | string
    created_at?: DateTimeWithAggregatesFilter<"Penduduk"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Penduduk"> | Date | string
  }

  export type KomoditasWhereInput = {
    AND?: KomoditasWhereInput | KomoditasWhereInput[]
    OR?: KomoditasWhereInput[]
    NOT?: KomoditasWhereInput | KomoditasWhereInput[]
    id_komoditas?: IntFilter<"Komoditas"> | number
    nama_komoditas?: StringFilter<"Komoditas"> | string
    posisi_x?: IntFilter<"Komoditas"> | number
    posisi_y?: IntFilter<"Komoditas"> | number
    created_at?: DateTimeFilter<"Komoditas"> | Date | string
    updated_at?: DateTimeFilter<"Komoditas"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Komoditas"> | Date | string | null
    kecamatan?: KecamatanListRelationFilter
    hasil_panen?: HasilPanenListRelationFilter
    prediksi_panen?: PrediksiPanenListRelationFilter
  }

  export type KomoditasOrderByWithRelationInput = {
    id_komoditas?: SortOrder
    nama_komoditas?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    kecamatan?: KecamatanOrderByRelationAggregateInput
    hasil_panen?: HasilPanenOrderByRelationAggregateInput
    prediksi_panen?: PrediksiPanenOrderByRelationAggregateInput
  }

  export type KomoditasWhereUniqueInput = Prisma.AtLeast<{
    id_komoditas?: number
    AND?: KomoditasWhereInput | KomoditasWhereInput[]
    OR?: KomoditasWhereInput[]
    NOT?: KomoditasWhereInput | KomoditasWhereInput[]
    nama_komoditas?: StringFilter<"Komoditas"> | string
    posisi_x?: IntFilter<"Komoditas"> | number
    posisi_y?: IntFilter<"Komoditas"> | number
    created_at?: DateTimeFilter<"Komoditas"> | Date | string
    updated_at?: DateTimeFilter<"Komoditas"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Komoditas"> | Date | string | null
    kecamatan?: KecamatanListRelationFilter
    hasil_panen?: HasilPanenListRelationFilter
    prediksi_panen?: PrediksiPanenListRelationFilter
  }, "id_komoditas">

  export type KomoditasOrderByWithAggregationInput = {
    id_komoditas?: SortOrder
    nama_komoditas?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: KomoditasCountOrderByAggregateInput
    _avg?: KomoditasAvgOrderByAggregateInput
    _max?: KomoditasMaxOrderByAggregateInput
    _min?: KomoditasMinOrderByAggregateInput
    _sum?: KomoditasSumOrderByAggregateInput
  }

  export type KomoditasScalarWhereWithAggregatesInput = {
    AND?: KomoditasScalarWhereWithAggregatesInput | KomoditasScalarWhereWithAggregatesInput[]
    OR?: KomoditasScalarWhereWithAggregatesInput[]
    NOT?: KomoditasScalarWhereWithAggregatesInput | KomoditasScalarWhereWithAggregatesInput[]
    id_komoditas?: IntWithAggregatesFilter<"Komoditas"> | number
    nama_komoditas?: StringWithAggregatesFilter<"Komoditas"> | string
    posisi_x?: IntWithAggregatesFilter<"Komoditas"> | number
    posisi_y?: IntWithAggregatesFilter<"Komoditas"> | number
    created_at?: DateTimeWithAggregatesFilter<"Komoditas"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Komoditas"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Komoditas"> | Date | string | null
  }

  export type HasilPanenWhereInput = {
    AND?: HasilPanenWhereInput | HasilPanenWhereInput[]
    OR?: HasilPanenWhereInput[]
    NOT?: HasilPanenWhereInput | HasilPanenWhereInput[]
    id_panen?: IntFilter<"HasilPanen"> | number
    id_kecamatan?: IntFilter<"HasilPanen"> | number
    id_komoditas?: IntFilter<"HasilPanen"> | number
    tahun_panen?: IntFilter<"HasilPanen"> | number
    produksi?: FloatFilter<"HasilPanen"> | number
    luas_panen?: FloatFilter<"HasilPanen"> | number
    produktivitas?: FloatFilter<"HasilPanen"> | number
    created_at?: DateTimeFilter<"HasilPanen"> | Date | string
    updated_at?: DateTimeFilter<"HasilPanen"> | Date | string
    kecamatan?: XOR<KecamatanScalarRelationFilter, KecamatanWhereInput>
    komoditas?: XOR<KomoditasScalarRelationFilter, KomoditasWhereInput>
  }

  export type HasilPanenOrderByWithRelationInput = {
    id_panen?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_panen?: SortOrder
    produksi?: SortOrder
    luas_panen?: SortOrder
    produktivitas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    kecamatan?: KecamatanOrderByWithRelationInput
    komoditas?: KomoditasOrderByWithRelationInput
  }

  export type HasilPanenWhereUniqueInput = Prisma.AtLeast<{
    id_panen?: number
    AND?: HasilPanenWhereInput | HasilPanenWhereInput[]
    OR?: HasilPanenWhereInput[]
    NOT?: HasilPanenWhereInput | HasilPanenWhereInput[]
    id_kecamatan?: IntFilter<"HasilPanen"> | number
    id_komoditas?: IntFilter<"HasilPanen"> | number
    tahun_panen?: IntFilter<"HasilPanen"> | number
    produksi?: FloatFilter<"HasilPanen"> | number
    luas_panen?: FloatFilter<"HasilPanen"> | number
    produktivitas?: FloatFilter<"HasilPanen"> | number
    created_at?: DateTimeFilter<"HasilPanen"> | Date | string
    updated_at?: DateTimeFilter<"HasilPanen"> | Date | string
    kecamatan?: XOR<KecamatanScalarRelationFilter, KecamatanWhereInput>
    komoditas?: XOR<KomoditasScalarRelationFilter, KomoditasWhereInput>
  }, "id_panen">

  export type HasilPanenOrderByWithAggregationInput = {
    id_panen?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_panen?: SortOrder
    produksi?: SortOrder
    luas_panen?: SortOrder
    produktivitas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: HasilPanenCountOrderByAggregateInput
    _avg?: HasilPanenAvgOrderByAggregateInput
    _max?: HasilPanenMaxOrderByAggregateInput
    _min?: HasilPanenMinOrderByAggregateInput
    _sum?: HasilPanenSumOrderByAggregateInput
  }

  export type HasilPanenScalarWhereWithAggregatesInput = {
    AND?: HasilPanenScalarWhereWithAggregatesInput | HasilPanenScalarWhereWithAggregatesInput[]
    OR?: HasilPanenScalarWhereWithAggregatesInput[]
    NOT?: HasilPanenScalarWhereWithAggregatesInput | HasilPanenScalarWhereWithAggregatesInput[]
    id_panen?: IntWithAggregatesFilter<"HasilPanen"> | number
    id_kecamatan?: IntWithAggregatesFilter<"HasilPanen"> | number
    id_komoditas?: IntWithAggregatesFilter<"HasilPanen"> | number
    tahun_panen?: IntWithAggregatesFilter<"HasilPanen"> | number
    produksi?: FloatWithAggregatesFilter<"HasilPanen"> | number
    luas_panen?: FloatWithAggregatesFilter<"HasilPanen"> | number
    produktivitas?: FloatWithAggregatesFilter<"HasilPanen"> | number
    created_at?: DateTimeWithAggregatesFilter<"HasilPanen"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"HasilPanen"> | Date | string
  }

  export type PrediksiPanenWhereInput = {
    AND?: PrediksiPanenWhereInput | PrediksiPanenWhereInput[]
    OR?: PrediksiPanenWhereInput[]
    NOT?: PrediksiPanenWhereInput | PrediksiPanenWhereInput[]
    id_prediksi?: IntFilter<"PrediksiPanen"> | number
    id_kecamatan?: IntFilter<"PrediksiPanen"> | number
    id_komoditas?: IntFilter<"PrediksiPanen"> | number
    tahun_prediksi?: IntFilter<"PrediksiPanen"> | number
    hasil_prediksi?: IntFilter<"PrediksiPanen"> | number
    created_at?: DateTimeFilter<"PrediksiPanen"> | Date | string
    updated_at?: DateTimeFilter<"PrediksiPanen"> | Date | string
    kecamatan?: XOR<KecamatanScalarRelationFilter, KecamatanWhereInput>
    komoditas?: XOR<KomoditasScalarRelationFilter, KomoditasWhereInput>
  }

  export type PrediksiPanenOrderByWithRelationInput = {
    id_prediksi?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_prediksi?: SortOrder
    hasil_prediksi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    kecamatan?: KecamatanOrderByWithRelationInput
    komoditas?: KomoditasOrderByWithRelationInput
  }

  export type PrediksiPanenWhereUniqueInput = Prisma.AtLeast<{
    id_prediksi?: number
    AND?: PrediksiPanenWhereInput | PrediksiPanenWhereInput[]
    OR?: PrediksiPanenWhereInput[]
    NOT?: PrediksiPanenWhereInput | PrediksiPanenWhereInput[]
    id_kecamatan?: IntFilter<"PrediksiPanen"> | number
    id_komoditas?: IntFilter<"PrediksiPanen"> | number
    tahun_prediksi?: IntFilter<"PrediksiPanen"> | number
    hasil_prediksi?: IntFilter<"PrediksiPanen"> | number
    created_at?: DateTimeFilter<"PrediksiPanen"> | Date | string
    updated_at?: DateTimeFilter<"PrediksiPanen"> | Date | string
    kecamatan?: XOR<KecamatanScalarRelationFilter, KecamatanWhereInput>
    komoditas?: XOR<KomoditasScalarRelationFilter, KomoditasWhereInput>
  }, "id_prediksi">

  export type PrediksiPanenOrderByWithAggregationInput = {
    id_prediksi?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_prediksi?: SortOrder
    hasil_prediksi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PrediksiPanenCountOrderByAggregateInput
    _avg?: PrediksiPanenAvgOrderByAggregateInput
    _max?: PrediksiPanenMaxOrderByAggregateInput
    _min?: PrediksiPanenMinOrderByAggregateInput
    _sum?: PrediksiPanenSumOrderByAggregateInput
  }

  export type PrediksiPanenScalarWhereWithAggregatesInput = {
    AND?: PrediksiPanenScalarWhereWithAggregatesInput | PrediksiPanenScalarWhereWithAggregatesInput[]
    OR?: PrediksiPanenScalarWhereWithAggregatesInput[]
    NOT?: PrediksiPanenScalarWhereWithAggregatesInput | PrediksiPanenScalarWhereWithAggregatesInput[]
    id_prediksi?: IntWithAggregatesFilter<"PrediksiPanen"> | number
    id_kecamatan?: IntWithAggregatesFilter<"PrediksiPanen"> | number
    id_komoditas?: IntWithAggregatesFilter<"PrediksiPanen"> | number
    tahun_prediksi?: IntWithAggregatesFilter<"PrediksiPanen"> | number
    hasil_prediksi?: IntWithAggregatesFilter<"PrediksiPanen"> | number
    created_at?: DateTimeWithAggregatesFilter<"PrediksiPanen"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PrediksiPanen"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    email_verified?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    detail?: DetailCreateNestedOneWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    email_verified?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    detail?: DetailUncheckedCreateNestedOneWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: DetailUpdateOneWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: DetailUncheckedUpdateOneWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    email_verified?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailCreateInput = {
    phone: string
    bio: string
    city: string
    county: string
    post_kode: string
    photo_profile: string
    user: UserCreateNestedOneWithoutDetailInput
  }

  export type DetailUncheckedCreateInput = {
    tax_id: string
    phone: string
    bio: string
    city: string
    county: string
    post_kode: string
    photo_profile: string
  }

  export type DetailUpdateInput = {
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    post_kode?: StringFieldUpdateOperationsInput | string
    photo_profile?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDetailNestedInput
  }

  export type DetailUncheckedUpdateInput = {
    tax_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    post_kode?: StringFieldUpdateOperationsInput | string
    photo_profile?: StringFieldUpdateOperationsInput | string
  }

  export type DetailCreateManyInput = {
    tax_id: string
    phone: string
    bio: string
    city: string
    county: string
    post_kode: string
    photo_profile: string
  }

  export type DetailUpdateManyMutationInput = {
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    post_kode?: StringFieldUpdateOperationsInput | string
    photo_profile?: StringFieldUpdateOperationsInput | string
  }

  export type DetailUncheckedUpdateManyInput = {
    tax_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    post_kode?: StringFieldUpdateOperationsInput | string
    photo_profile?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    id_provider: string
    id_token?: string | null
    type: string
    scope?: string | null
    provider: string
    expires_at?: number | null
    token_type?: string | null
    access_token?: string | null
    refresh_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    id_user: string
    id_provider: string
    id_token?: string | null
    type: string
    scope?: string | null
    provider: string
    expires_at?: number | null
    token_type?: string | null
    access_token?: string | null
    refresh_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_provider?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    id_provider?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    id_user: string
    id_provider: string
    id_token?: string | null
    type: string
    scope?: string | null
    provider: string
    expires_at?: number | null
    token_type?: string | null
    access_token?: string | null
    refresh_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_provider?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    id_provider?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    session_token: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    id_user: string
    session_token: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    id_user: string
    session_token: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KecamatanCreateInput = {
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    komoditas: KomoditasCreateNestedOneWithoutKecamatanInput
    penduduk?: PendudukCreateNestedManyWithoutKecamatanInput
    hasil_panen?: HasilPanenCreateNestedManyWithoutKecamatanInput
    prediksi_panen?: PrediksiPanenCreateNestedManyWithoutKecamatanInput
  }

  export type KecamatanUncheckedCreateInput = {
    id_kecamatan?: number
    id_komoditas: number
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    penduduk?: PendudukUncheckedCreateNestedManyWithoutKecamatanInput
    hasil_panen?: HasilPanenUncheckedCreateNestedManyWithoutKecamatanInput
    prediksi_panen?: PrediksiPanenUncheckedCreateNestedManyWithoutKecamatanInput
  }

  export type KecamatanUpdateInput = {
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    komoditas?: KomoditasUpdateOneRequiredWithoutKecamatanNestedInput
    penduduk?: PendudukUpdateManyWithoutKecamatanNestedInput
    hasil_panen?: HasilPanenUpdateManyWithoutKecamatanNestedInput
    prediksi_panen?: PrediksiPanenUpdateManyWithoutKecamatanNestedInput
  }

  export type KecamatanUncheckedUpdateInput = {
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    penduduk?: PendudukUncheckedUpdateManyWithoutKecamatanNestedInput
    hasil_panen?: HasilPanenUncheckedUpdateManyWithoutKecamatanNestedInput
    prediksi_panen?: PrediksiPanenUncheckedUpdateManyWithoutKecamatanNestedInput
  }

  export type KecamatanCreateManyInput = {
    id_kecamatan?: number
    id_komoditas: number
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KecamatanUpdateManyMutationInput = {
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KecamatanUncheckedUpdateManyInput = {
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendudukCreateInput = {
    data_tahun: number
    jumlah_penduduk: number
    laju_pertumbuhan: string
    created_at?: Date | string
    updated_at?: Date | string
    kecamatan: KecamatanCreateNestedOneWithoutPendudukInput
  }

  export type PendudukUncheckedCreateInput = {
    id_penduduk?: number
    id_kecamatan: number
    data_tahun: number
    jumlah_penduduk: number
    laju_pertumbuhan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PendudukUpdateInput = {
    data_tahun?: IntFieldUpdateOperationsInput | number
    jumlah_penduduk?: FloatFieldUpdateOperationsInput | number
    laju_pertumbuhan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kecamatan?: KecamatanUpdateOneRequiredWithoutPendudukNestedInput
  }

  export type PendudukUncheckedUpdateInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    data_tahun?: IntFieldUpdateOperationsInput | number
    jumlah_penduduk?: FloatFieldUpdateOperationsInput | number
    laju_pertumbuhan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendudukCreateManyInput = {
    id_penduduk?: number
    id_kecamatan: number
    data_tahun: number
    jumlah_penduduk: number
    laju_pertumbuhan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PendudukUpdateManyMutationInput = {
    data_tahun?: IntFieldUpdateOperationsInput | number
    jumlah_penduduk?: FloatFieldUpdateOperationsInput | number
    laju_pertumbuhan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendudukUncheckedUpdateManyInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    data_tahun?: IntFieldUpdateOperationsInput | number
    jumlah_penduduk?: FloatFieldUpdateOperationsInput | number
    laju_pertumbuhan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomoditasCreateInput = {
    nama_komoditas: string
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    kecamatan?: KecamatanCreateNestedManyWithoutKomoditasInput
    hasil_panen?: HasilPanenCreateNestedManyWithoutKomoditasInput
    prediksi_panen?: PrediksiPanenCreateNestedManyWithoutKomoditasInput
  }

  export type KomoditasUncheckedCreateInput = {
    id_komoditas?: number
    nama_komoditas: string
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    kecamatan?: KecamatanUncheckedCreateNestedManyWithoutKomoditasInput
    hasil_panen?: HasilPanenUncheckedCreateNestedManyWithoutKomoditasInput
    prediksi_panen?: PrediksiPanenUncheckedCreateNestedManyWithoutKomoditasInput
  }

  export type KomoditasUpdateInput = {
    nama_komoditas?: StringFieldUpdateOperationsInput | string
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: KecamatanUpdateManyWithoutKomoditasNestedInput
    hasil_panen?: HasilPanenUpdateManyWithoutKomoditasNestedInput
    prediksi_panen?: PrediksiPanenUpdateManyWithoutKomoditasNestedInput
  }

  export type KomoditasUncheckedUpdateInput = {
    id_komoditas?: IntFieldUpdateOperationsInput | number
    nama_komoditas?: StringFieldUpdateOperationsInput | string
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: KecamatanUncheckedUpdateManyWithoutKomoditasNestedInput
    hasil_panen?: HasilPanenUncheckedUpdateManyWithoutKomoditasNestedInput
    prediksi_panen?: PrediksiPanenUncheckedUpdateManyWithoutKomoditasNestedInput
  }

  export type KomoditasCreateManyInput = {
    id_komoditas?: number
    nama_komoditas: string
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type KomoditasUpdateManyMutationInput = {
    nama_komoditas?: StringFieldUpdateOperationsInput | string
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KomoditasUncheckedUpdateManyInput = {
    id_komoditas?: IntFieldUpdateOperationsInput | number
    nama_komoditas?: StringFieldUpdateOperationsInput | string
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HasilPanenCreateInput = {
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at?: Date | string
    updated_at?: Date | string
    kecamatan: KecamatanCreateNestedOneWithoutHasil_panenInput
    komoditas: KomoditasCreateNestedOneWithoutHasil_panenInput
  }

  export type HasilPanenUncheckedCreateInput = {
    id_panen?: number
    id_kecamatan: number
    id_komoditas: number
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HasilPanenUpdateInput = {
    tahun_panen?: IntFieldUpdateOperationsInput | number
    produksi?: FloatFieldUpdateOperationsInput | number
    luas_panen?: FloatFieldUpdateOperationsInput | number
    produktivitas?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kecamatan?: KecamatanUpdateOneRequiredWithoutHasil_panenNestedInput
    komoditas?: KomoditasUpdateOneRequiredWithoutHasil_panenNestedInput
  }

  export type HasilPanenUncheckedUpdateInput = {
    id_panen?: IntFieldUpdateOperationsInput | number
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    tahun_panen?: IntFieldUpdateOperationsInput | number
    produksi?: FloatFieldUpdateOperationsInput | number
    luas_panen?: FloatFieldUpdateOperationsInput | number
    produktivitas?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilPanenCreateManyInput = {
    id_panen?: number
    id_kecamatan: number
    id_komoditas: number
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HasilPanenUpdateManyMutationInput = {
    tahun_panen?: IntFieldUpdateOperationsInput | number
    produksi?: FloatFieldUpdateOperationsInput | number
    luas_panen?: FloatFieldUpdateOperationsInput | number
    produktivitas?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilPanenUncheckedUpdateManyInput = {
    id_panen?: IntFieldUpdateOperationsInput | number
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    tahun_panen?: IntFieldUpdateOperationsInput | number
    produksi?: FloatFieldUpdateOperationsInput | number
    luas_panen?: FloatFieldUpdateOperationsInput | number
    produktivitas?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrediksiPanenCreateInput = {
    tahun_prediksi: number
    hasil_prediksi: number
    created_at?: Date | string
    updated_at?: Date | string
    kecamatan: KecamatanCreateNestedOneWithoutPrediksi_panenInput
    komoditas: KomoditasCreateNestedOneWithoutPrediksi_panenInput
  }

  export type PrediksiPanenUncheckedCreateInput = {
    id_prediksi?: number
    id_kecamatan: number
    id_komoditas: number
    tahun_prediksi: number
    hasil_prediksi: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrediksiPanenUpdateInput = {
    tahun_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kecamatan?: KecamatanUpdateOneRequiredWithoutPrediksi_panenNestedInput
    komoditas?: KomoditasUpdateOneRequiredWithoutPrediksi_panenNestedInput
  }

  export type PrediksiPanenUncheckedUpdateInput = {
    id_prediksi?: IntFieldUpdateOperationsInput | number
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    tahun_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrediksiPanenCreateManyInput = {
    id_prediksi?: number
    id_kecamatan: number
    id_komoditas: number
    tahun_prediksi: number
    hasil_prediksi: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrediksiPanenUpdateManyMutationInput = {
    tahun_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrediksiPanenUncheckedUpdateManyInput = {
    id_prediksi?: IntFieldUpdateOperationsInput | number
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    tahun_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DetailNullableScalarRelationFilter = {
    is?: DetailWhereInput | null
    isNot?: DetailWhereInput | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DetailCountOrderByAggregateInput = {
    tax_id?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    city?: SortOrder
    county?: SortOrder
    post_kode?: SortOrder
    photo_profile?: SortOrder
  }

  export type DetailMaxOrderByAggregateInput = {
    tax_id?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    city?: SortOrder
    county?: SortOrder
    post_kode?: SortOrder
    photo_profile?: SortOrder
  }

  export type DetailMinOrderByAggregateInput = {
    tax_id?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    city?: SortOrder
    county?: SortOrder
    post_kode?: SortOrder
    photo_profile?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountProviderId_providerCompoundUniqueInput = {
    provider: string
    id_provider: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_provider?: SortOrder
    id_token?: SortOrder
    type?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_provider?: SortOrder
    id_token?: SortOrder
    type?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_provider?: SortOrder
    id_token?: SortOrder
    type?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    session_token?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    session_token?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    session_token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type KomoditasScalarRelationFilter = {
    is?: KomoditasWhereInput
    isNot?: KomoditasWhereInput
  }

  export type PendudukListRelationFilter = {
    every?: PendudukWhereInput
    some?: PendudukWhereInput
    none?: PendudukWhereInput
  }

  export type HasilPanenListRelationFilter = {
    every?: HasilPanenWhereInput
    some?: HasilPanenWhereInput
    none?: HasilPanenWhereInput
  }

  export type PrediksiPanenListRelationFilter = {
    every?: PrediksiPanenWhereInput
    some?: PrediksiPanenWhereInput
    none?: PrediksiPanenWhereInput
  }

  export type PendudukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HasilPanenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrediksiPanenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KecamatanCountOrderByAggregateInput = {
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    nama_kecamatan?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    area?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KecamatanAvgOrderByAggregateInput = {
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    area?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
  }

  export type KecamatanMaxOrderByAggregateInput = {
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    nama_kecamatan?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    area?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KecamatanMinOrderByAggregateInput = {
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    nama_kecamatan?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    area?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KecamatanSumOrderByAggregateInput = {
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    area?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type KecamatanScalarRelationFilter = {
    is?: KecamatanWhereInput
    isNot?: KecamatanWhereInput
  }

  export type PendudukCountOrderByAggregateInput = {
    id_penduduk?: SortOrder
    id_kecamatan?: SortOrder
    data_tahun?: SortOrder
    jumlah_penduduk?: SortOrder
    laju_pertumbuhan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PendudukAvgOrderByAggregateInput = {
    id_penduduk?: SortOrder
    id_kecamatan?: SortOrder
    data_tahun?: SortOrder
    jumlah_penduduk?: SortOrder
  }

  export type PendudukMaxOrderByAggregateInput = {
    id_penduduk?: SortOrder
    id_kecamatan?: SortOrder
    data_tahun?: SortOrder
    jumlah_penduduk?: SortOrder
    laju_pertumbuhan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PendudukMinOrderByAggregateInput = {
    id_penduduk?: SortOrder
    id_kecamatan?: SortOrder
    data_tahun?: SortOrder
    jumlah_penduduk?: SortOrder
    laju_pertumbuhan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PendudukSumOrderByAggregateInput = {
    id_penduduk?: SortOrder
    id_kecamatan?: SortOrder
    data_tahun?: SortOrder
    jumlah_penduduk?: SortOrder
  }

  export type KecamatanListRelationFilter = {
    every?: KecamatanWhereInput
    some?: KecamatanWhereInput
    none?: KecamatanWhereInput
  }

  export type KecamatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KomoditasCountOrderByAggregateInput = {
    id_komoditas?: SortOrder
    nama_komoditas?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type KomoditasAvgOrderByAggregateInput = {
    id_komoditas?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
  }

  export type KomoditasMaxOrderByAggregateInput = {
    id_komoditas?: SortOrder
    nama_komoditas?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type KomoditasMinOrderByAggregateInput = {
    id_komoditas?: SortOrder
    nama_komoditas?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type KomoditasSumOrderByAggregateInput = {
    id_komoditas?: SortOrder
    posisi_x?: SortOrder
    posisi_y?: SortOrder
  }

  export type HasilPanenCountOrderByAggregateInput = {
    id_panen?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_panen?: SortOrder
    produksi?: SortOrder
    luas_panen?: SortOrder
    produktivitas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HasilPanenAvgOrderByAggregateInput = {
    id_panen?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_panen?: SortOrder
    produksi?: SortOrder
    luas_panen?: SortOrder
    produktivitas?: SortOrder
  }

  export type HasilPanenMaxOrderByAggregateInput = {
    id_panen?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_panen?: SortOrder
    produksi?: SortOrder
    luas_panen?: SortOrder
    produktivitas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HasilPanenMinOrderByAggregateInput = {
    id_panen?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_panen?: SortOrder
    produksi?: SortOrder
    luas_panen?: SortOrder
    produktivitas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HasilPanenSumOrderByAggregateInput = {
    id_panen?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_panen?: SortOrder
    produksi?: SortOrder
    luas_panen?: SortOrder
    produktivitas?: SortOrder
  }

  export type PrediksiPanenCountOrderByAggregateInput = {
    id_prediksi?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_prediksi?: SortOrder
    hasil_prediksi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PrediksiPanenAvgOrderByAggregateInput = {
    id_prediksi?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_prediksi?: SortOrder
    hasil_prediksi?: SortOrder
  }

  export type PrediksiPanenMaxOrderByAggregateInput = {
    id_prediksi?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_prediksi?: SortOrder
    hasil_prediksi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PrediksiPanenMinOrderByAggregateInput = {
    id_prediksi?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_prediksi?: SortOrder
    hasil_prediksi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PrediksiPanenSumOrderByAggregateInput = {
    id_prediksi?: SortOrder
    id_kecamatan?: SortOrder
    id_komoditas?: SortOrder
    tahun_prediksi?: SortOrder
    hasil_prediksi?: SortOrder
  }

  export type DetailCreateNestedOneWithoutUserInput = {
    create?: XOR<DetailCreateWithoutUserInput, DetailUncheckedCreateWithoutUserInput>
    connectOrCreate?: DetailCreateOrConnectWithoutUserInput
    connect?: DetailWhereUniqueInput
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type DetailUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DetailCreateWithoutUserInput, DetailUncheckedCreateWithoutUserInput>
    connectOrCreate?: DetailCreateOrConnectWithoutUserInput
    connect?: DetailWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DetailUpdateOneWithoutUserNestedInput = {
    create?: XOR<DetailCreateWithoutUserInput, DetailUncheckedCreateWithoutUserInput>
    connectOrCreate?: DetailCreateOrConnectWithoutUserInput
    upsert?: DetailUpsertWithoutUserInput
    disconnect?: DetailWhereInput | boolean
    delete?: DetailWhereInput | boolean
    connect?: DetailWhereUniqueInput
    update?: XOR<XOR<DetailUpdateToOneWithWhereWithoutUserInput, DetailUpdateWithoutUserInput>, DetailUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type DetailUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DetailCreateWithoutUserInput, DetailUncheckedCreateWithoutUserInput>
    connectOrCreate?: DetailCreateOrConnectWithoutUserInput
    upsert?: DetailUpsertWithoutUserInput
    disconnect?: DetailWhereInput | boolean
    delete?: DetailWhereInput | boolean
    connect?: DetailWhereUniqueInput
    update?: XOR<XOR<DetailUpdateToOneWithWhereWithoutUserInput, DetailUpdateWithoutUserInput>, DetailUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDetailInput = {
    create?: XOR<UserCreateWithoutDetailInput, UserUncheckedCreateWithoutDetailInput>
    connectOrCreate?: UserCreateOrConnectWithoutDetailInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDetailNestedInput = {
    create?: XOR<UserCreateWithoutDetailInput, UserUncheckedCreateWithoutDetailInput>
    connectOrCreate?: UserCreateOrConnectWithoutDetailInput
    upsert?: UserUpsertWithoutDetailInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDetailInput, UserUpdateWithoutDetailInput>, UserUncheckedUpdateWithoutDetailInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type KomoditasCreateNestedOneWithoutKecamatanInput = {
    create?: XOR<KomoditasCreateWithoutKecamatanInput, KomoditasUncheckedCreateWithoutKecamatanInput>
    connectOrCreate?: KomoditasCreateOrConnectWithoutKecamatanInput
    connect?: KomoditasWhereUniqueInput
  }

  export type PendudukCreateNestedManyWithoutKecamatanInput = {
    create?: XOR<PendudukCreateWithoutKecamatanInput, PendudukUncheckedCreateWithoutKecamatanInput> | PendudukCreateWithoutKecamatanInput[] | PendudukUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutKecamatanInput | PendudukCreateOrConnectWithoutKecamatanInput[]
    createMany?: PendudukCreateManyKecamatanInputEnvelope
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
  }

  export type HasilPanenCreateNestedManyWithoutKecamatanInput = {
    create?: XOR<HasilPanenCreateWithoutKecamatanInput, HasilPanenUncheckedCreateWithoutKecamatanInput> | HasilPanenCreateWithoutKecamatanInput[] | HasilPanenUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: HasilPanenCreateOrConnectWithoutKecamatanInput | HasilPanenCreateOrConnectWithoutKecamatanInput[]
    createMany?: HasilPanenCreateManyKecamatanInputEnvelope
    connect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
  }

  export type PrediksiPanenCreateNestedManyWithoutKecamatanInput = {
    create?: XOR<PrediksiPanenCreateWithoutKecamatanInput, PrediksiPanenUncheckedCreateWithoutKecamatanInput> | PrediksiPanenCreateWithoutKecamatanInput[] | PrediksiPanenUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: PrediksiPanenCreateOrConnectWithoutKecamatanInput | PrediksiPanenCreateOrConnectWithoutKecamatanInput[]
    createMany?: PrediksiPanenCreateManyKecamatanInputEnvelope
    connect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
  }

  export type PendudukUncheckedCreateNestedManyWithoutKecamatanInput = {
    create?: XOR<PendudukCreateWithoutKecamatanInput, PendudukUncheckedCreateWithoutKecamatanInput> | PendudukCreateWithoutKecamatanInput[] | PendudukUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutKecamatanInput | PendudukCreateOrConnectWithoutKecamatanInput[]
    createMany?: PendudukCreateManyKecamatanInputEnvelope
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
  }

  export type HasilPanenUncheckedCreateNestedManyWithoutKecamatanInput = {
    create?: XOR<HasilPanenCreateWithoutKecamatanInput, HasilPanenUncheckedCreateWithoutKecamatanInput> | HasilPanenCreateWithoutKecamatanInput[] | HasilPanenUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: HasilPanenCreateOrConnectWithoutKecamatanInput | HasilPanenCreateOrConnectWithoutKecamatanInput[]
    createMany?: HasilPanenCreateManyKecamatanInputEnvelope
    connect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
  }

  export type PrediksiPanenUncheckedCreateNestedManyWithoutKecamatanInput = {
    create?: XOR<PrediksiPanenCreateWithoutKecamatanInput, PrediksiPanenUncheckedCreateWithoutKecamatanInput> | PrediksiPanenCreateWithoutKecamatanInput[] | PrediksiPanenUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: PrediksiPanenCreateOrConnectWithoutKecamatanInput | PrediksiPanenCreateOrConnectWithoutKecamatanInput[]
    createMany?: PrediksiPanenCreateManyKecamatanInputEnvelope
    connect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KomoditasUpdateOneRequiredWithoutKecamatanNestedInput = {
    create?: XOR<KomoditasCreateWithoutKecamatanInput, KomoditasUncheckedCreateWithoutKecamatanInput>
    connectOrCreate?: KomoditasCreateOrConnectWithoutKecamatanInput
    upsert?: KomoditasUpsertWithoutKecamatanInput
    connect?: KomoditasWhereUniqueInput
    update?: XOR<XOR<KomoditasUpdateToOneWithWhereWithoutKecamatanInput, KomoditasUpdateWithoutKecamatanInput>, KomoditasUncheckedUpdateWithoutKecamatanInput>
  }

  export type PendudukUpdateManyWithoutKecamatanNestedInput = {
    create?: XOR<PendudukCreateWithoutKecamatanInput, PendudukUncheckedCreateWithoutKecamatanInput> | PendudukCreateWithoutKecamatanInput[] | PendudukUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutKecamatanInput | PendudukCreateOrConnectWithoutKecamatanInput[]
    upsert?: PendudukUpsertWithWhereUniqueWithoutKecamatanInput | PendudukUpsertWithWhereUniqueWithoutKecamatanInput[]
    createMany?: PendudukCreateManyKecamatanInputEnvelope
    set?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    disconnect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    delete?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    update?: PendudukUpdateWithWhereUniqueWithoutKecamatanInput | PendudukUpdateWithWhereUniqueWithoutKecamatanInput[]
    updateMany?: PendudukUpdateManyWithWhereWithoutKecamatanInput | PendudukUpdateManyWithWhereWithoutKecamatanInput[]
    deleteMany?: PendudukScalarWhereInput | PendudukScalarWhereInput[]
  }

  export type HasilPanenUpdateManyWithoutKecamatanNestedInput = {
    create?: XOR<HasilPanenCreateWithoutKecamatanInput, HasilPanenUncheckedCreateWithoutKecamatanInput> | HasilPanenCreateWithoutKecamatanInput[] | HasilPanenUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: HasilPanenCreateOrConnectWithoutKecamatanInput | HasilPanenCreateOrConnectWithoutKecamatanInput[]
    upsert?: HasilPanenUpsertWithWhereUniqueWithoutKecamatanInput | HasilPanenUpsertWithWhereUniqueWithoutKecamatanInput[]
    createMany?: HasilPanenCreateManyKecamatanInputEnvelope
    set?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    disconnect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    delete?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    connect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    update?: HasilPanenUpdateWithWhereUniqueWithoutKecamatanInput | HasilPanenUpdateWithWhereUniqueWithoutKecamatanInput[]
    updateMany?: HasilPanenUpdateManyWithWhereWithoutKecamatanInput | HasilPanenUpdateManyWithWhereWithoutKecamatanInput[]
    deleteMany?: HasilPanenScalarWhereInput | HasilPanenScalarWhereInput[]
  }

  export type PrediksiPanenUpdateManyWithoutKecamatanNestedInput = {
    create?: XOR<PrediksiPanenCreateWithoutKecamatanInput, PrediksiPanenUncheckedCreateWithoutKecamatanInput> | PrediksiPanenCreateWithoutKecamatanInput[] | PrediksiPanenUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: PrediksiPanenCreateOrConnectWithoutKecamatanInput | PrediksiPanenCreateOrConnectWithoutKecamatanInput[]
    upsert?: PrediksiPanenUpsertWithWhereUniqueWithoutKecamatanInput | PrediksiPanenUpsertWithWhereUniqueWithoutKecamatanInput[]
    createMany?: PrediksiPanenCreateManyKecamatanInputEnvelope
    set?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    disconnect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    delete?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    connect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    update?: PrediksiPanenUpdateWithWhereUniqueWithoutKecamatanInput | PrediksiPanenUpdateWithWhereUniqueWithoutKecamatanInput[]
    updateMany?: PrediksiPanenUpdateManyWithWhereWithoutKecamatanInput | PrediksiPanenUpdateManyWithWhereWithoutKecamatanInput[]
    deleteMany?: PrediksiPanenScalarWhereInput | PrediksiPanenScalarWhereInput[]
  }

  export type PendudukUncheckedUpdateManyWithoutKecamatanNestedInput = {
    create?: XOR<PendudukCreateWithoutKecamatanInput, PendudukUncheckedCreateWithoutKecamatanInput> | PendudukCreateWithoutKecamatanInput[] | PendudukUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutKecamatanInput | PendudukCreateOrConnectWithoutKecamatanInput[]
    upsert?: PendudukUpsertWithWhereUniqueWithoutKecamatanInput | PendudukUpsertWithWhereUniqueWithoutKecamatanInput[]
    createMany?: PendudukCreateManyKecamatanInputEnvelope
    set?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    disconnect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    delete?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    update?: PendudukUpdateWithWhereUniqueWithoutKecamatanInput | PendudukUpdateWithWhereUniqueWithoutKecamatanInput[]
    updateMany?: PendudukUpdateManyWithWhereWithoutKecamatanInput | PendudukUpdateManyWithWhereWithoutKecamatanInput[]
    deleteMany?: PendudukScalarWhereInput | PendudukScalarWhereInput[]
  }

  export type HasilPanenUncheckedUpdateManyWithoutKecamatanNestedInput = {
    create?: XOR<HasilPanenCreateWithoutKecamatanInput, HasilPanenUncheckedCreateWithoutKecamatanInput> | HasilPanenCreateWithoutKecamatanInput[] | HasilPanenUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: HasilPanenCreateOrConnectWithoutKecamatanInput | HasilPanenCreateOrConnectWithoutKecamatanInput[]
    upsert?: HasilPanenUpsertWithWhereUniqueWithoutKecamatanInput | HasilPanenUpsertWithWhereUniqueWithoutKecamatanInput[]
    createMany?: HasilPanenCreateManyKecamatanInputEnvelope
    set?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    disconnect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    delete?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    connect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    update?: HasilPanenUpdateWithWhereUniqueWithoutKecamatanInput | HasilPanenUpdateWithWhereUniqueWithoutKecamatanInput[]
    updateMany?: HasilPanenUpdateManyWithWhereWithoutKecamatanInput | HasilPanenUpdateManyWithWhereWithoutKecamatanInput[]
    deleteMany?: HasilPanenScalarWhereInput | HasilPanenScalarWhereInput[]
  }

  export type PrediksiPanenUncheckedUpdateManyWithoutKecamatanNestedInput = {
    create?: XOR<PrediksiPanenCreateWithoutKecamatanInput, PrediksiPanenUncheckedCreateWithoutKecamatanInput> | PrediksiPanenCreateWithoutKecamatanInput[] | PrediksiPanenUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: PrediksiPanenCreateOrConnectWithoutKecamatanInput | PrediksiPanenCreateOrConnectWithoutKecamatanInput[]
    upsert?: PrediksiPanenUpsertWithWhereUniqueWithoutKecamatanInput | PrediksiPanenUpsertWithWhereUniqueWithoutKecamatanInput[]
    createMany?: PrediksiPanenCreateManyKecamatanInputEnvelope
    set?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    disconnect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    delete?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    connect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    update?: PrediksiPanenUpdateWithWhereUniqueWithoutKecamatanInput | PrediksiPanenUpdateWithWhereUniqueWithoutKecamatanInput[]
    updateMany?: PrediksiPanenUpdateManyWithWhereWithoutKecamatanInput | PrediksiPanenUpdateManyWithWhereWithoutKecamatanInput[]
    deleteMany?: PrediksiPanenScalarWhereInput | PrediksiPanenScalarWhereInput[]
  }

  export type KecamatanCreateNestedOneWithoutPendudukInput = {
    create?: XOR<KecamatanCreateWithoutPendudukInput, KecamatanUncheckedCreateWithoutPendudukInput>
    connectOrCreate?: KecamatanCreateOrConnectWithoutPendudukInput
    connect?: KecamatanWhereUniqueInput
  }

  export type KecamatanUpdateOneRequiredWithoutPendudukNestedInput = {
    create?: XOR<KecamatanCreateWithoutPendudukInput, KecamatanUncheckedCreateWithoutPendudukInput>
    connectOrCreate?: KecamatanCreateOrConnectWithoutPendudukInput
    upsert?: KecamatanUpsertWithoutPendudukInput
    connect?: KecamatanWhereUniqueInput
    update?: XOR<XOR<KecamatanUpdateToOneWithWhereWithoutPendudukInput, KecamatanUpdateWithoutPendudukInput>, KecamatanUncheckedUpdateWithoutPendudukInput>
  }

  export type KecamatanCreateNestedManyWithoutKomoditasInput = {
    create?: XOR<KecamatanCreateWithoutKomoditasInput, KecamatanUncheckedCreateWithoutKomoditasInput> | KecamatanCreateWithoutKomoditasInput[] | KecamatanUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: KecamatanCreateOrConnectWithoutKomoditasInput | KecamatanCreateOrConnectWithoutKomoditasInput[]
    createMany?: KecamatanCreateManyKomoditasInputEnvelope
    connect?: KecamatanWhereUniqueInput | KecamatanWhereUniqueInput[]
  }

  export type HasilPanenCreateNestedManyWithoutKomoditasInput = {
    create?: XOR<HasilPanenCreateWithoutKomoditasInput, HasilPanenUncheckedCreateWithoutKomoditasInput> | HasilPanenCreateWithoutKomoditasInput[] | HasilPanenUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: HasilPanenCreateOrConnectWithoutKomoditasInput | HasilPanenCreateOrConnectWithoutKomoditasInput[]
    createMany?: HasilPanenCreateManyKomoditasInputEnvelope
    connect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
  }

  export type PrediksiPanenCreateNestedManyWithoutKomoditasInput = {
    create?: XOR<PrediksiPanenCreateWithoutKomoditasInput, PrediksiPanenUncheckedCreateWithoutKomoditasInput> | PrediksiPanenCreateWithoutKomoditasInput[] | PrediksiPanenUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: PrediksiPanenCreateOrConnectWithoutKomoditasInput | PrediksiPanenCreateOrConnectWithoutKomoditasInput[]
    createMany?: PrediksiPanenCreateManyKomoditasInputEnvelope
    connect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
  }

  export type KecamatanUncheckedCreateNestedManyWithoutKomoditasInput = {
    create?: XOR<KecamatanCreateWithoutKomoditasInput, KecamatanUncheckedCreateWithoutKomoditasInput> | KecamatanCreateWithoutKomoditasInput[] | KecamatanUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: KecamatanCreateOrConnectWithoutKomoditasInput | KecamatanCreateOrConnectWithoutKomoditasInput[]
    createMany?: KecamatanCreateManyKomoditasInputEnvelope
    connect?: KecamatanWhereUniqueInput | KecamatanWhereUniqueInput[]
  }

  export type HasilPanenUncheckedCreateNestedManyWithoutKomoditasInput = {
    create?: XOR<HasilPanenCreateWithoutKomoditasInput, HasilPanenUncheckedCreateWithoutKomoditasInput> | HasilPanenCreateWithoutKomoditasInput[] | HasilPanenUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: HasilPanenCreateOrConnectWithoutKomoditasInput | HasilPanenCreateOrConnectWithoutKomoditasInput[]
    createMany?: HasilPanenCreateManyKomoditasInputEnvelope
    connect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
  }

  export type PrediksiPanenUncheckedCreateNestedManyWithoutKomoditasInput = {
    create?: XOR<PrediksiPanenCreateWithoutKomoditasInput, PrediksiPanenUncheckedCreateWithoutKomoditasInput> | PrediksiPanenCreateWithoutKomoditasInput[] | PrediksiPanenUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: PrediksiPanenCreateOrConnectWithoutKomoditasInput | PrediksiPanenCreateOrConnectWithoutKomoditasInput[]
    createMany?: PrediksiPanenCreateManyKomoditasInputEnvelope
    connect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
  }

  export type KecamatanUpdateManyWithoutKomoditasNestedInput = {
    create?: XOR<KecamatanCreateWithoutKomoditasInput, KecamatanUncheckedCreateWithoutKomoditasInput> | KecamatanCreateWithoutKomoditasInput[] | KecamatanUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: KecamatanCreateOrConnectWithoutKomoditasInput | KecamatanCreateOrConnectWithoutKomoditasInput[]
    upsert?: KecamatanUpsertWithWhereUniqueWithoutKomoditasInput | KecamatanUpsertWithWhereUniqueWithoutKomoditasInput[]
    createMany?: KecamatanCreateManyKomoditasInputEnvelope
    set?: KecamatanWhereUniqueInput | KecamatanWhereUniqueInput[]
    disconnect?: KecamatanWhereUniqueInput | KecamatanWhereUniqueInput[]
    delete?: KecamatanWhereUniqueInput | KecamatanWhereUniqueInput[]
    connect?: KecamatanWhereUniqueInput | KecamatanWhereUniqueInput[]
    update?: KecamatanUpdateWithWhereUniqueWithoutKomoditasInput | KecamatanUpdateWithWhereUniqueWithoutKomoditasInput[]
    updateMany?: KecamatanUpdateManyWithWhereWithoutKomoditasInput | KecamatanUpdateManyWithWhereWithoutKomoditasInput[]
    deleteMany?: KecamatanScalarWhereInput | KecamatanScalarWhereInput[]
  }

  export type HasilPanenUpdateManyWithoutKomoditasNestedInput = {
    create?: XOR<HasilPanenCreateWithoutKomoditasInput, HasilPanenUncheckedCreateWithoutKomoditasInput> | HasilPanenCreateWithoutKomoditasInput[] | HasilPanenUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: HasilPanenCreateOrConnectWithoutKomoditasInput | HasilPanenCreateOrConnectWithoutKomoditasInput[]
    upsert?: HasilPanenUpsertWithWhereUniqueWithoutKomoditasInput | HasilPanenUpsertWithWhereUniqueWithoutKomoditasInput[]
    createMany?: HasilPanenCreateManyKomoditasInputEnvelope
    set?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    disconnect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    delete?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    connect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    update?: HasilPanenUpdateWithWhereUniqueWithoutKomoditasInput | HasilPanenUpdateWithWhereUniqueWithoutKomoditasInput[]
    updateMany?: HasilPanenUpdateManyWithWhereWithoutKomoditasInput | HasilPanenUpdateManyWithWhereWithoutKomoditasInput[]
    deleteMany?: HasilPanenScalarWhereInput | HasilPanenScalarWhereInput[]
  }

  export type PrediksiPanenUpdateManyWithoutKomoditasNestedInput = {
    create?: XOR<PrediksiPanenCreateWithoutKomoditasInput, PrediksiPanenUncheckedCreateWithoutKomoditasInput> | PrediksiPanenCreateWithoutKomoditasInput[] | PrediksiPanenUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: PrediksiPanenCreateOrConnectWithoutKomoditasInput | PrediksiPanenCreateOrConnectWithoutKomoditasInput[]
    upsert?: PrediksiPanenUpsertWithWhereUniqueWithoutKomoditasInput | PrediksiPanenUpsertWithWhereUniqueWithoutKomoditasInput[]
    createMany?: PrediksiPanenCreateManyKomoditasInputEnvelope
    set?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    disconnect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    delete?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    connect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    update?: PrediksiPanenUpdateWithWhereUniqueWithoutKomoditasInput | PrediksiPanenUpdateWithWhereUniqueWithoutKomoditasInput[]
    updateMany?: PrediksiPanenUpdateManyWithWhereWithoutKomoditasInput | PrediksiPanenUpdateManyWithWhereWithoutKomoditasInput[]
    deleteMany?: PrediksiPanenScalarWhereInput | PrediksiPanenScalarWhereInput[]
  }

  export type KecamatanUncheckedUpdateManyWithoutKomoditasNestedInput = {
    create?: XOR<KecamatanCreateWithoutKomoditasInput, KecamatanUncheckedCreateWithoutKomoditasInput> | KecamatanCreateWithoutKomoditasInput[] | KecamatanUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: KecamatanCreateOrConnectWithoutKomoditasInput | KecamatanCreateOrConnectWithoutKomoditasInput[]
    upsert?: KecamatanUpsertWithWhereUniqueWithoutKomoditasInput | KecamatanUpsertWithWhereUniqueWithoutKomoditasInput[]
    createMany?: KecamatanCreateManyKomoditasInputEnvelope
    set?: KecamatanWhereUniqueInput | KecamatanWhereUniqueInput[]
    disconnect?: KecamatanWhereUniqueInput | KecamatanWhereUniqueInput[]
    delete?: KecamatanWhereUniqueInput | KecamatanWhereUniqueInput[]
    connect?: KecamatanWhereUniqueInput | KecamatanWhereUniqueInput[]
    update?: KecamatanUpdateWithWhereUniqueWithoutKomoditasInput | KecamatanUpdateWithWhereUniqueWithoutKomoditasInput[]
    updateMany?: KecamatanUpdateManyWithWhereWithoutKomoditasInput | KecamatanUpdateManyWithWhereWithoutKomoditasInput[]
    deleteMany?: KecamatanScalarWhereInput | KecamatanScalarWhereInput[]
  }

  export type HasilPanenUncheckedUpdateManyWithoutKomoditasNestedInput = {
    create?: XOR<HasilPanenCreateWithoutKomoditasInput, HasilPanenUncheckedCreateWithoutKomoditasInput> | HasilPanenCreateWithoutKomoditasInput[] | HasilPanenUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: HasilPanenCreateOrConnectWithoutKomoditasInput | HasilPanenCreateOrConnectWithoutKomoditasInput[]
    upsert?: HasilPanenUpsertWithWhereUniqueWithoutKomoditasInput | HasilPanenUpsertWithWhereUniqueWithoutKomoditasInput[]
    createMany?: HasilPanenCreateManyKomoditasInputEnvelope
    set?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    disconnect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    delete?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    connect?: HasilPanenWhereUniqueInput | HasilPanenWhereUniqueInput[]
    update?: HasilPanenUpdateWithWhereUniqueWithoutKomoditasInput | HasilPanenUpdateWithWhereUniqueWithoutKomoditasInput[]
    updateMany?: HasilPanenUpdateManyWithWhereWithoutKomoditasInput | HasilPanenUpdateManyWithWhereWithoutKomoditasInput[]
    deleteMany?: HasilPanenScalarWhereInput | HasilPanenScalarWhereInput[]
  }

  export type PrediksiPanenUncheckedUpdateManyWithoutKomoditasNestedInput = {
    create?: XOR<PrediksiPanenCreateWithoutKomoditasInput, PrediksiPanenUncheckedCreateWithoutKomoditasInput> | PrediksiPanenCreateWithoutKomoditasInput[] | PrediksiPanenUncheckedCreateWithoutKomoditasInput[]
    connectOrCreate?: PrediksiPanenCreateOrConnectWithoutKomoditasInput | PrediksiPanenCreateOrConnectWithoutKomoditasInput[]
    upsert?: PrediksiPanenUpsertWithWhereUniqueWithoutKomoditasInput | PrediksiPanenUpsertWithWhereUniqueWithoutKomoditasInput[]
    createMany?: PrediksiPanenCreateManyKomoditasInputEnvelope
    set?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    disconnect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    delete?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    connect?: PrediksiPanenWhereUniqueInput | PrediksiPanenWhereUniqueInput[]
    update?: PrediksiPanenUpdateWithWhereUniqueWithoutKomoditasInput | PrediksiPanenUpdateWithWhereUniqueWithoutKomoditasInput[]
    updateMany?: PrediksiPanenUpdateManyWithWhereWithoutKomoditasInput | PrediksiPanenUpdateManyWithWhereWithoutKomoditasInput[]
    deleteMany?: PrediksiPanenScalarWhereInput | PrediksiPanenScalarWhereInput[]
  }

  export type KecamatanCreateNestedOneWithoutHasil_panenInput = {
    create?: XOR<KecamatanCreateWithoutHasil_panenInput, KecamatanUncheckedCreateWithoutHasil_panenInput>
    connectOrCreate?: KecamatanCreateOrConnectWithoutHasil_panenInput
    connect?: KecamatanWhereUniqueInput
  }

  export type KomoditasCreateNestedOneWithoutHasil_panenInput = {
    create?: XOR<KomoditasCreateWithoutHasil_panenInput, KomoditasUncheckedCreateWithoutHasil_panenInput>
    connectOrCreate?: KomoditasCreateOrConnectWithoutHasil_panenInput
    connect?: KomoditasWhereUniqueInput
  }

  export type KecamatanUpdateOneRequiredWithoutHasil_panenNestedInput = {
    create?: XOR<KecamatanCreateWithoutHasil_panenInput, KecamatanUncheckedCreateWithoutHasil_panenInput>
    connectOrCreate?: KecamatanCreateOrConnectWithoutHasil_panenInput
    upsert?: KecamatanUpsertWithoutHasil_panenInput
    connect?: KecamatanWhereUniqueInput
    update?: XOR<XOR<KecamatanUpdateToOneWithWhereWithoutHasil_panenInput, KecamatanUpdateWithoutHasil_panenInput>, KecamatanUncheckedUpdateWithoutHasil_panenInput>
  }

  export type KomoditasUpdateOneRequiredWithoutHasil_panenNestedInput = {
    create?: XOR<KomoditasCreateWithoutHasil_panenInput, KomoditasUncheckedCreateWithoutHasil_panenInput>
    connectOrCreate?: KomoditasCreateOrConnectWithoutHasil_panenInput
    upsert?: KomoditasUpsertWithoutHasil_panenInput
    connect?: KomoditasWhereUniqueInput
    update?: XOR<XOR<KomoditasUpdateToOneWithWhereWithoutHasil_panenInput, KomoditasUpdateWithoutHasil_panenInput>, KomoditasUncheckedUpdateWithoutHasil_panenInput>
  }

  export type KecamatanCreateNestedOneWithoutPrediksi_panenInput = {
    create?: XOR<KecamatanCreateWithoutPrediksi_panenInput, KecamatanUncheckedCreateWithoutPrediksi_panenInput>
    connectOrCreate?: KecamatanCreateOrConnectWithoutPrediksi_panenInput
    connect?: KecamatanWhereUniqueInput
  }

  export type KomoditasCreateNestedOneWithoutPrediksi_panenInput = {
    create?: XOR<KomoditasCreateWithoutPrediksi_panenInput, KomoditasUncheckedCreateWithoutPrediksi_panenInput>
    connectOrCreate?: KomoditasCreateOrConnectWithoutPrediksi_panenInput
    connect?: KomoditasWhereUniqueInput
  }

  export type KecamatanUpdateOneRequiredWithoutPrediksi_panenNestedInput = {
    create?: XOR<KecamatanCreateWithoutPrediksi_panenInput, KecamatanUncheckedCreateWithoutPrediksi_panenInput>
    connectOrCreate?: KecamatanCreateOrConnectWithoutPrediksi_panenInput
    upsert?: KecamatanUpsertWithoutPrediksi_panenInput
    connect?: KecamatanWhereUniqueInput
    update?: XOR<XOR<KecamatanUpdateToOneWithWhereWithoutPrediksi_panenInput, KecamatanUpdateWithoutPrediksi_panenInput>, KecamatanUncheckedUpdateWithoutPrediksi_panenInput>
  }

  export type KomoditasUpdateOneRequiredWithoutPrediksi_panenNestedInput = {
    create?: XOR<KomoditasCreateWithoutPrediksi_panenInput, KomoditasUncheckedCreateWithoutPrediksi_panenInput>
    connectOrCreate?: KomoditasCreateOrConnectWithoutPrediksi_panenInput
    upsert?: KomoditasUpsertWithoutPrediksi_panenInput
    connect?: KomoditasWhereUniqueInput
    update?: XOR<XOR<KomoditasUpdateToOneWithWhereWithoutPrediksi_panenInput, KomoditasUpdateWithoutPrediksi_panenInput>, KomoditasUncheckedUpdateWithoutPrediksi_panenInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DetailCreateWithoutUserInput = {
    phone: string
    bio: string
    city: string
    county: string
    post_kode: string
    photo_profile: string
  }

  export type DetailUncheckedCreateWithoutUserInput = {
    phone: string
    bio: string
    city: string
    county: string
    post_kode: string
    photo_profile: string
  }

  export type DetailCreateOrConnectWithoutUserInput = {
    where: DetailWhereUniqueInput
    create: XOR<DetailCreateWithoutUserInput, DetailUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    id_provider: string
    id_token?: string | null
    type: string
    scope?: string | null
    provider: string
    expires_at?: number | null
    token_type?: string | null
    access_token?: string | null
    refresh_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    id_provider: string
    id_token?: string | null
    type: string
    scope?: string | null
    provider: string
    expires_at?: number | null
    token_type?: string | null
    access_token?: string | null
    refresh_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    session_token: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    session_token: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DetailUpsertWithoutUserInput = {
    update: XOR<DetailUpdateWithoutUserInput, DetailUncheckedUpdateWithoutUserInput>
    create: XOR<DetailCreateWithoutUserInput, DetailUncheckedCreateWithoutUserInput>
    where?: DetailWhereInput
  }

  export type DetailUpdateToOneWithWhereWithoutUserInput = {
    where?: DetailWhereInput
    data: XOR<DetailUpdateWithoutUserInput, DetailUncheckedUpdateWithoutUserInput>
  }

  export type DetailUpdateWithoutUserInput = {
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    post_kode?: StringFieldUpdateOperationsInput | string
    photo_profile?: StringFieldUpdateOperationsInput | string
  }

  export type DetailUncheckedUpdateWithoutUserInput = {
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    post_kode?: StringFieldUpdateOperationsInput | string
    photo_profile?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    id_user?: StringFilter<"Account"> | string
    id_provider?: StringFilter<"Account"> | string
    id_token?: StringNullableFilter<"Account"> | string | null
    type?: StringFilter<"Account"> | string
    scope?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    refresh_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    id_user?: StringFilter<"Session"> | string
    session_token?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutDetailInput = {
    id?: string
    name?: string | null
    email?: string | null
    email_verified?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDetailInput = {
    id?: string
    name?: string | null
    email?: string | null
    email_verified?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDetailInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDetailInput, UserUncheckedCreateWithoutDetailInput>
  }

  export type UserUpsertWithoutDetailInput = {
    update: XOR<UserUpdateWithoutDetailInput, UserUncheckedUpdateWithoutDetailInput>
    create: XOR<UserCreateWithoutDetailInput, UserUncheckedCreateWithoutDetailInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDetailInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDetailInput, UserUncheckedUpdateWithoutDetailInput>
  }

  export type UserUpdateWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    email_verified?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    detail?: DetailCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    email_verified?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    detail?: DetailUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: DetailUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: DetailUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    email_verified?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    detail?: DetailCreateNestedOneWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    email_verified?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    detail?: DetailUncheckedCreateNestedOneWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: DetailUpdateOneWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: DetailUncheckedUpdateOneWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KomoditasCreateWithoutKecamatanInput = {
    nama_komoditas: string
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    hasil_panen?: HasilPanenCreateNestedManyWithoutKomoditasInput
    prediksi_panen?: PrediksiPanenCreateNestedManyWithoutKomoditasInput
  }

  export type KomoditasUncheckedCreateWithoutKecamatanInput = {
    id_komoditas?: number
    nama_komoditas: string
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    hasil_panen?: HasilPanenUncheckedCreateNestedManyWithoutKomoditasInput
    prediksi_panen?: PrediksiPanenUncheckedCreateNestedManyWithoutKomoditasInput
  }

  export type KomoditasCreateOrConnectWithoutKecamatanInput = {
    where: KomoditasWhereUniqueInput
    create: XOR<KomoditasCreateWithoutKecamatanInput, KomoditasUncheckedCreateWithoutKecamatanInput>
  }

  export type PendudukCreateWithoutKecamatanInput = {
    data_tahun: number
    jumlah_penduduk: number
    laju_pertumbuhan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PendudukUncheckedCreateWithoutKecamatanInput = {
    id_penduduk?: number
    data_tahun: number
    jumlah_penduduk: number
    laju_pertumbuhan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PendudukCreateOrConnectWithoutKecamatanInput = {
    where: PendudukWhereUniqueInput
    create: XOR<PendudukCreateWithoutKecamatanInput, PendudukUncheckedCreateWithoutKecamatanInput>
  }

  export type PendudukCreateManyKecamatanInputEnvelope = {
    data: PendudukCreateManyKecamatanInput | PendudukCreateManyKecamatanInput[]
    skipDuplicates?: boolean
  }

  export type HasilPanenCreateWithoutKecamatanInput = {
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at?: Date | string
    updated_at?: Date | string
    komoditas: KomoditasCreateNestedOneWithoutHasil_panenInput
  }

  export type HasilPanenUncheckedCreateWithoutKecamatanInput = {
    id_panen?: number
    id_komoditas: number
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HasilPanenCreateOrConnectWithoutKecamatanInput = {
    where: HasilPanenWhereUniqueInput
    create: XOR<HasilPanenCreateWithoutKecamatanInput, HasilPanenUncheckedCreateWithoutKecamatanInput>
  }

  export type HasilPanenCreateManyKecamatanInputEnvelope = {
    data: HasilPanenCreateManyKecamatanInput | HasilPanenCreateManyKecamatanInput[]
    skipDuplicates?: boolean
  }

  export type PrediksiPanenCreateWithoutKecamatanInput = {
    tahun_prediksi: number
    hasil_prediksi: number
    created_at?: Date | string
    updated_at?: Date | string
    komoditas: KomoditasCreateNestedOneWithoutPrediksi_panenInput
  }

  export type PrediksiPanenUncheckedCreateWithoutKecamatanInput = {
    id_prediksi?: number
    id_komoditas: number
    tahun_prediksi: number
    hasil_prediksi: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrediksiPanenCreateOrConnectWithoutKecamatanInput = {
    where: PrediksiPanenWhereUniqueInput
    create: XOR<PrediksiPanenCreateWithoutKecamatanInput, PrediksiPanenUncheckedCreateWithoutKecamatanInput>
  }

  export type PrediksiPanenCreateManyKecamatanInputEnvelope = {
    data: PrediksiPanenCreateManyKecamatanInput | PrediksiPanenCreateManyKecamatanInput[]
    skipDuplicates?: boolean
  }

  export type KomoditasUpsertWithoutKecamatanInput = {
    update: XOR<KomoditasUpdateWithoutKecamatanInput, KomoditasUncheckedUpdateWithoutKecamatanInput>
    create: XOR<KomoditasCreateWithoutKecamatanInput, KomoditasUncheckedCreateWithoutKecamatanInput>
    where?: KomoditasWhereInput
  }

  export type KomoditasUpdateToOneWithWhereWithoutKecamatanInput = {
    where?: KomoditasWhereInput
    data: XOR<KomoditasUpdateWithoutKecamatanInput, KomoditasUncheckedUpdateWithoutKecamatanInput>
  }

  export type KomoditasUpdateWithoutKecamatanInput = {
    nama_komoditas?: StringFieldUpdateOperationsInput | string
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hasil_panen?: HasilPanenUpdateManyWithoutKomoditasNestedInput
    prediksi_panen?: PrediksiPanenUpdateManyWithoutKomoditasNestedInput
  }

  export type KomoditasUncheckedUpdateWithoutKecamatanInput = {
    id_komoditas?: IntFieldUpdateOperationsInput | number
    nama_komoditas?: StringFieldUpdateOperationsInput | string
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hasil_panen?: HasilPanenUncheckedUpdateManyWithoutKomoditasNestedInput
    prediksi_panen?: PrediksiPanenUncheckedUpdateManyWithoutKomoditasNestedInput
  }

  export type PendudukUpsertWithWhereUniqueWithoutKecamatanInput = {
    where: PendudukWhereUniqueInput
    update: XOR<PendudukUpdateWithoutKecamatanInput, PendudukUncheckedUpdateWithoutKecamatanInput>
    create: XOR<PendudukCreateWithoutKecamatanInput, PendudukUncheckedCreateWithoutKecamatanInput>
  }

  export type PendudukUpdateWithWhereUniqueWithoutKecamatanInput = {
    where: PendudukWhereUniqueInput
    data: XOR<PendudukUpdateWithoutKecamatanInput, PendudukUncheckedUpdateWithoutKecamatanInput>
  }

  export type PendudukUpdateManyWithWhereWithoutKecamatanInput = {
    where: PendudukScalarWhereInput
    data: XOR<PendudukUpdateManyMutationInput, PendudukUncheckedUpdateManyWithoutKecamatanInput>
  }

  export type PendudukScalarWhereInput = {
    AND?: PendudukScalarWhereInput | PendudukScalarWhereInput[]
    OR?: PendudukScalarWhereInput[]
    NOT?: PendudukScalarWhereInput | PendudukScalarWhereInput[]
    id_penduduk?: IntFilter<"Penduduk"> | number
    id_kecamatan?: IntFilter<"Penduduk"> | number
    data_tahun?: IntFilter<"Penduduk"> | number
    jumlah_penduduk?: FloatFilter<"Penduduk"> | number
    laju_pertumbuhan?: StringFilter<"Penduduk"> | string
    created_at?: DateTimeFilter<"Penduduk"> | Date | string
    updated_at?: DateTimeFilter<"Penduduk"> | Date | string
  }

  export type HasilPanenUpsertWithWhereUniqueWithoutKecamatanInput = {
    where: HasilPanenWhereUniqueInput
    update: XOR<HasilPanenUpdateWithoutKecamatanInput, HasilPanenUncheckedUpdateWithoutKecamatanInput>
    create: XOR<HasilPanenCreateWithoutKecamatanInput, HasilPanenUncheckedCreateWithoutKecamatanInput>
  }

  export type HasilPanenUpdateWithWhereUniqueWithoutKecamatanInput = {
    where: HasilPanenWhereUniqueInput
    data: XOR<HasilPanenUpdateWithoutKecamatanInput, HasilPanenUncheckedUpdateWithoutKecamatanInput>
  }

  export type HasilPanenUpdateManyWithWhereWithoutKecamatanInput = {
    where: HasilPanenScalarWhereInput
    data: XOR<HasilPanenUpdateManyMutationInput, HasilPanenUncheckedUpdateManyWithoutKecamatanInput>
  }

  export type HasilPanenScalarWhereInput = {
    AND?: HasilPanenScalarWhereInput | HasilPanenScalarWhereInput[]
    OR?: HasilPanenScalarWhereInput[]
    NOT?: HasilPanenScalarWhereInput | HasilPanenScalarWhereInput[]
    id_panen?: IntFilter<"HasilPanen"> | number
    id_kecamatan?: IntFilter<"HasilPanen"> | number
    id_komoditas?: IntFilter<"HasilPanen"> | number
    tahun_panen?: IntFilter<"HasilPanen"> | number
    produksi?: FloatFilter<"HasilPanen"> | number
    luas_panen?: FloatFilter<"HasilPanen"> | number
    produktivitas?: FloatFilter<"HasilPanen"> | number
    created_at?: DateTimeFilter<"HasilPanen"> | Date | string
    updated_at?: DateTimeFilter<"HasilPanen"> | Date | string
  }

  export type PrediksiPanenUpsertWithWhereUniqueWithoutKecamatanInput = {
    where: PrediksiPanenWhereUniqueInput
    update: XOR<PrediksiPanenUpdateWithoutKecamatanInput, PrediksiPanenUncheckedUpdateWithoutKecamatanInput>
    create: XOR<PrediksiPanenCreateWithoutKecamatanInput, PrediksiPanenUncheckedCreateWithoutKecamatanInput>
  }

  export type PrediksiPanenUpdateWithWhereUniqueWithoutKecamatanInput = {
    where: PrediksiPanenWhereUniqueInput
    data: XOR<PrediksiPanenUpdateWithoutKecamatanInput, PrediksiPanenUncheckedUpdateWithoutKecamatanInput>
  }

  export type PrediksiPanenUpdateManyWithWhereWithoutKecamatanInput = {
    where: PrediksiPanenScalarWhereInput
    data: XOR<PrediksiPanenUpdateManyMutationInput, PrediksiPanenUncheckedUpdateManyWithoutKecamatanInput>
  }

  export type PrediksiPanenScalarWhereInput = {
    AND?: PrediksiPanenScalarWhereInput | PrediksiPanenScalarWhereInput[]
    OR?: PrediksiPanenScalarWhereInput[]
    NOT?: PrediksiPanenScalarWhereInput | PrediksiPanenScalarWhereInput[]
    id_prediksi?: IntFilter<"PrediksiPanen"> | number
    id_kecamatan?: IntFilter<"PrediksiPanen"> | number
    id_komoditas?: IntFilter<"PrediksiPanen"> | number
    tahun_prediksi?: IntFilter<"PrediksiPanen"> | number
    hasil_prediksi?: IntFilter<"PrediksiPanen"> | number
    created_at?: DateTimeFilter<"PrediksiPanen"> | Date | string
    updated_at?: DateTimeFilter<"PrediksiPanen"> | Date | string
  }

  export type KecamatanCreateWithoutPendudukInput = {
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    komoditas: KomoditasCreateNestedOneWithoutKecamatanInput
    hasil_panen?: HasilPanenCreateNestedManyWithoutKecamatanInput
    prediksi_panen?: PrediksiPanenCreateNestedManyWithoutKecamatanInput
  }

  export type KecamatanUncheckedCreateWithoutPendudukInput = {
    id_kecamatan?: number
    id_komoditas: number
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    hasil_panen?: HasilPanenUncheckedCreateNestedManyWithoutKecamatanInput
    prediksi_panen?: PrediksiPanenUncheckedCreateNestedManyWithoutKecamatanInput
  }

  export type KecamatanCreateOrConnectWithoutPendudukInput = {
    where: KecamatanWhereUniqueInput
    create: XOR<KecamatanCreateWithoutPendudukInput, KecamatanUncheckedCreateWithoutPendudukInput>
  }

  export type KecamatanUpsertWithoutPendudukInput = {
    update: XOR<KecamatanUpdateWithoutPendudukInput, KecamatanUncheckedUpdateWithoutPendudukInput>
    create: XOR<KecamatanCreateWithoutPendudukInput, KecamatanUncheckedCreateWithoutPendudukInput>
    where?: KecamatanWhereInput
  }

  export type KecamatanUpdateToOneWithWhereWithoutPendudukInput = {
    where?: KecamatanWhereInput
    data: XOR<KecamatanUpdateWithoutPendudukInput, KecamatanUncheckedUpdateWithoutPendudukInput>
  }

  export type KecamatanUpdateWithoutPendudukInput = {
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    komoditas?: KomoditasUpdateOneRequiredWithoutKecamatanNestedInput
    hasil_panen?: HasilPanenUpdateManyWithoutKecamatanNestedInput
    prediksi_panen?: PrediksiPanenUpdateManyWithoutKecamatanNestedInput
  }

  export type KecamatanUncheckedUpdateWithoutPendudukInput = {
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hasil_panen?: HasilPanenUncheckedUpdateManyWithoutKecamatanNestedInput
    prediksi_panen?: PrediksiPanenUncheckedUpdateManyWithoutKecamatanNestedInput
  }

  export type KecamatanCreateWithoutKomoditasInput = {
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    penduduk?: PendudukCreateNestedManyWithoutKecamatanInput
    hasil_panen?: HasilPanenCreateNestedManyWithoutKecamatanInput
    prediksi_panen?: PrediksiPanenCreateNestedManyWithoutKecamatanInput
  }

  export type KecamatanUncheckedCreateWithoutKomoditasInput = {
    id_kecamatan?: number
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    penduduk?: PendudukUncheckedCreateNestedManyWithoutKecamatanInput
    hasil_panen?: HasilPanenUncheckedCreateNestedManyWithoutKecamatanInput
    prediksi_panen?: PrediksiPanenUncheckedCreateNestedManyWithoutKecamatanInput
  }

  export type KecamatanCreateOrConnectWithoutKomoditasInput = {
    where: KecamatanWhereUniqueInput
    create: XOR<KecamatanCreateWithoutKomoditasInput, KecamatanUncheckedCreateWithoutKomoditasInput>
  }

  export type KecamatanCreateManyKomoditasInputEnvelope = {
    data: KecamatanCreateManyKomoditasInput | KecamatanCreateManyKomoditasInput[]
    skipDuplicates?: boolean
  }

  export type HasilPanenCreateWithoutKomoditasInput = {
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at?: Date | string
    updated_at?: Date | string
    kecamatan: KecamatanCreateNestedOneWithoutHasil_panenInput
  }

  export type HasilPanenUncheckedCreateWithoutKomoditasInput = {
    id_panen?: number
    id_kecamatan: number
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HasilPanenCreateOrConnectWithoutKomoditasInput = {
    where: HasilPanenWhereUniqueInput
    create: XOR<HasilPanenCreateWithoutKomoditasInput, HasilPanenUncheckedCreateWithoutKomoditasInput>
  }

  export type HasilPanenCreateManyKomoditasInputEnvelope = {
    data: HasilPanenCreateManyKomoditasInput | HasilPanenCreateManyKomoditasInput[]
    skipDuplicates?: boolean
  }

  export type PrediksiPanenCreateWithoutKomoditasInput = {
    tahun_prediksi: number
    hasil_prediksi: number
    created_at?: Date | string
    updated_at?: Date | string
    kecamatan: KecamatanCreateNestedOneWithoutPrediksi_panenInput
  }

  export type PrediksiPanenUncheckedCreateWithoutKomoditasInput = {
    id_prediksi?: number
    id_kecamatan: number
    tahun_prediksi: number
    hasil_prediksi: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrediksiPanenCreateOrConnectWithoutKomoditasInput = {
    where: PrediksiPanenWhereUniqueInput
    create: XOR<PrediksiPanenCreateWithoutKomoditasInput, PrediksiPanenUncheckedCreateWithoutKomoditasInput>
  }

  export type PrediksiPanenCreateManyKomoditasInputEnvelope = {
    data: PrediksiPanenCreateManyKomoditasInput | PrediksiPanenCreateManyKomoditasInput[]
    skipDuplicates?: boolean
  }

  export type KecamatanUpsertWithWhereUniqueWithoutKomoditasInput = {
    where: KecamatanWhereUniqueInput
    update: XOR<KecamatanUpdateWithoutKomoditasInput, KecamatanUncheckedUpdateWithoutKomoditasInput>
    create: XOR<KecamatanCreateWithoutKomoditasInput, KecamatanUncheckedCreateWithoutKomoditasInput>
  }

  export type KecamatanUpdateWithWhereUniqueWithoutKomoditasInput = {
    where: KecamatanWhereUniqueInput
    data: XOR<KecamatanUpdateWithoutKomoditasInput, KecamatanUncheckedUpdateWithoutKomoditasInput>
  }

  export type KecamatanUpdateManyWithWhereWithoutKomoditasInput = {
    where: KecamatanScalarWhereInput
    data: XOR<KecamatanUpdateManyMutationInput, KecamatanUncheckedUpdateManyWithoutKomoditasInput>
  }

  export type KecamatanScalarWhereInput = {
    AND?: KecamatanScalarWhereInput | KecamatanScalarWhereInput[]
    OR?: KecamatanScalarWhereInput[]
    NOT?: KecamatanScalarWhereInput | KecamatanScalarWhereInput[]
    id_kecamatan?: IntFilter<"Kecamatan"> | number
    id_komoditas?: IntFilter<"Kecamatan"> | number
    nama_kecamatan?: StringFilter<"Kecamatan"> | string
    deskripsi?: StringFilter<"Kecamatan"> | string
    gambar?: StringFilter<"Kecamatan"> | string
    area?: FloatFilter<"Kecamatan"> | number
    posisi_x?: IntFilter<"Kecamatan"> | number
    posisi_y?: IntFilter<"Kecamatan"> | number
    created_at?: DateTimeFilter<"Kecamatan"> | Date | string
    updated_at?: DateTimeFilter<"Kecamatan"> | Date | string
  }

  export type HasilPanenUpsertWithWhereUniqueWithoutKomoditasInput = {
    where: HasilPanenWhereUniqueInput
    update: XOR<HasilPanenUpdateWithoutKomoditasInput, HasilPanenUncheckedUpdateWithoutKomoditasInput>
    create: XOR<HasilPanenCreateWithoutKomoditasInput, HasilPanenUncheckedCreateWithoutKomoditasInput>
  }

  export type HasilPanenUpdateWithWhereUniqueWithoutKomoditasInput = {
    where: HasilPanenWhereUniqueInput
    data: XOR<HasilPanenUpdateWithoutKomoditasInput, HasilPanenUncheckedUpdateWithoutKomoditasInput>
  }

  export type HasilPanenUpdateManyWithWhereWithoutKomoditasInput = {
    where: HasilPanenScalarWhereInput
    data: XOR<HasilPanenUpdateManyMutationInput, HasilPanenUncheckedUpdateManyWithoutKomoditasInput>
  }

  export type PrediksiPanenUpsertWithWhereUniqueWithoutKomoditasInput = {
    where: PrediksiPanenWhereUniqueInput
    update: XOR<PrediksiPanenUpdateWithoutKomoditasInput, PrediksiPanenUncheckedUpdateWithoutKomoditasInput>
    create: XOR<PrediksiPanenCreateWithoutKomoditasInput, PrediksiPanenUncheckedCreateWithoutKomoditasInput>
  }

  export type PrediksiPanenUpdateWithWhereUniqueWithoutKomoditasInput = {
    where: PrediksiPanenWhereUniqueInput
    data: XOR<PrediksiPanenUpdateWithoutKomoditasInput, PrediksiPanenUncheckedUpdateWithoutKomoditasInput>
  }

  export type PrediksiPanenUpdateManyWithWhereWithoutKomoditasInput = {
    where: PrediksiPanenScalarWhereInput
    data: XOR<PrediksiPanenUpdateManyMutationInput, PrediksiPanenUncheckedUpdateManyWithoutKomoditasInput>
  }

  export type KecamatanCreateWithoutHasil_panenInput = {
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    komoditas: KomoditasCreateNestedOneWithoutKecamatanInput
    penduduk?: PendudukCreateNestedManyWithoutKecamatanInput
    prediksi_panen?: PrediksiPanenCreateNestedManyWithoutKecamatanInput
  }

  export type KecamatanUncheckedCreateWithoutHasil_panenInput = {
    id_kecamatan?: number
    id_komoditas: number
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    penduduk?: PendudukUncheckedCreateNestedManyWithoutKecamatanInput
    prediksi_panen?: PrediksiPanenUncheckedCreateNestedManyWithoutKecamatanInput
  }

  export type KecamatanCreateOrConnectWithoutHasil_panenInput = {
    where: KecamatanWhereUniqueInput
    create: XOR<KecamatanCreateWithoutHasil_panenInput, KecamatanUncheckedCreateWithoutHasil_panenInput>
  }

  export type KomoditasCreateWithoutHasil_panenInput = {
    nama_komoditas: string
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    kecamatan?: KecamatanCreateNestedManyWithoutKomoditasInput
    prediksi_panen?: PrediksiPanenCreateNestedManyWithoutKomoditasInput
  }

  export type KomoditasUncheckedCreateWithoutHasil_panenInput = {
    id_komoditas?: number
    nama_komoditas: string
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    kecamatan?: KecamatanUncheckedCreateNestedManyWithoutKomoditasInput
    prediksi_panen?: PrediksiPanenUncheckedCreateNestedManyWithoutKomoditasInput
  }

  export type KomoditasCreateOrConnectWithoutHasil_panenInput = {
    where: KomoditasWhereUniqueInput
    create: XOR<KomoditasCreateWithoutHasil_panenInput, KomoditasUncheckedCreateWithoutHasil_panenInput>
  }

  export type KecamatanUpsertWithoutHasil_panenInput = {
    update: XOR<KecamatanUpdateWithoutHasil_panenInput, KecamatanUncheckedUpdateWithoutHasil_panenInput>
    create: XOR<KecamatanCreateWithoutHasil_panenInput, KecamatanUncheckedCreateWithoutHasil_panenInput>
    where?: KecamatanWhereInput
  }

  export type KecamatanUpdateToOneWithWhereWithoutHasil_panenInput = {
    where?: KecamatanWhereInput
    data: XOR<KecamatanUpdateWithoutHasil_panenInput, KecamatanUncheckedUpdateWithoutHasil_panenInput>
  }

  export type KecamatanUpdateWithoutHasil_panenInput = {
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    komoditas?: KomoditasUpdateOneRequiredWithoutKecamatanNestedInput
    penduduk?: PendudukUpdateManyWithoutKecamatanNestedInput
    prediksi_panen?: PrediksiPanenUpdateManyWithoutKecamatanNestedInput
  }

  export type KecamatanUncheckedUpdateWithoutHasil_panenInput = {
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    penduduk?: PendudukUncheckedUpdateManyWithoutKecamatanNestedInput
    prediksi_panen?: PrediksiPanenUncheckedUpdateManyWithoutKecamatanNestedInput
  }

  export type KomoditasUpsertWithoutHasil_panenInput = {
    update: XOR<KomoditasUpdateWithoutHasil_panenInput, KomoditasUncheckedUpdateWithoutHasil_panenInput>
    create: XOR<KomoditasCreateWithoutHasil_panenInput, KomoditasUncheckedCreateWithoutHasil_panenInput>
    where?: KomoditasWhereInput
  }

  export type KomoditasUpdateToOneWithWhereWithoutHasil_panenInput = {
    where?: KomoditasWhereInput
    data: XOR<KomoditasUpdateWithoutHasil_panenInput, KomoditasUncheckedUpdateWithoutHasil_panenInput>
  }

  export type KomoditasUpdateWithoutHasil_panenInput = {
    nama_komoditas?: StringFieldUpdateOperationsInput | string
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: KecamatanUpdateManyWithoutKomoditasNestedInput
    prediksi_panen?: PrediksiPanenUpdateManyWithoutKomoditasNestedInput
  }

  export type KomoditasUncheckedUpdateWithoutHasil_panenInput = {
    id_komoditas?: IntFieldUpdateOperationsInput | number
    nama_komoditas?: StringFieldUpdateOperationsInput | string
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: KecamatanUncheckedUpdateManyWithoutKomoditasNestedInput
    prediksi_panen?: PrediksiPanenUncheckedUpdateManyWithoutKomoditasNestedInput
  }

  export type KecamatanCreateWithoutPrediksi_panenInput = {
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    komoditas: KomoditasCreateNestedOneWithoutKecamatanInput
    penduduk?: PendudukCreateNestedManyWithoutKecamatanInput
    hasil_panen?: HasilPanenCreateNestedManyWithoutKecamatanInput
  }

  export type KecamatanUncheckedCreateWithoutPrediksi_panenInput = {
    id_kecamatan?: number
    id_komoditas: number
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    penduduk?: PendudukUncheckedCreateNestedManyWithoutKecamatanInput
    hasil_panen?: HasilPanenUncheckedCreateNestedManyWithoutKecamatanInput
  }

  export type KecamatanCreateOrConnectWithoutPrediksi_panenInput = {
    where: KecamatanWhereUniqueInput
    create: XOR<KecamatanCreateWithoutPrediksi_panenInput, KecamatanUncheckedCreateWithoutPrediksi_panenInput>
  }

  export type KomoditasCreateWithoutPrediksi_panenInput = {
    nama_komoditas: string
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    kecamatan?: KecamatanCreateNestedManyWithoutKomoditasInput
    hasil_panen?: HasilPanenCreateNestedManyWithoutKomoditasInput
  }

  export type KomoditasUncheckedCreateWithoutPrediksi_panenInput = {
    id_komoditas?: number
    nama_komoditas: string
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    kecamatan?: KecamatanUncheckedCreateNestedManyWithoutKomoditasInput
    hasil_panen?: HasilPanenUncheckedCreateNestedManyWithoutKomoditasInput
  }

  export type KomoditasCreateOrConnectWithoutPrediksi_panenInput = {
    where: KomoditasWhereUniqueInput
    create: XOR<KomoditasCreateWithoutPrediksi_panenInput, KomoditasUncheckedCreateWithoutPrediksi_panenInput>
  }

  export type KecamatanUpsertWithoutPrediksi_panenInput = {
    update: XOR<KecamatanUpdateWithoutPrediksi_panenInput, KecamatanUncheckedUpdateWithoutPrediksi_panenInput>
    create: XOR<KecamatanCreateWithoutPrediksi_panenInput, KecamatanUncheckedCreateWithoutPrediksi_panenInput>
    where?: KecamatanWhereInput
  }

  export type KecamatanUpdateToOneWithWhereWithoutPrediksi_panenInput = {
    where?: KecamatanWhereInput
    data: XOR<KecamatanUpdateWithoutPrediksi_panenInput, KecamatanUncheckedUpdateWithoutPrediksi_panenInput>
  }

  export type KecamatanUpdateWithoutPrediksi_panenInput = {
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    komoditas?: KomoditasUpdateOneRequiredWithoutKecamatanNestedInput
    penduduk?: PendudukUpdateManyWithoutKecamatanNestedInput
    hasil_panen?: HasilPanenUpdateManyWithoutKecamatanNestedInput
  }

  export type KecamatanUncheckedUpdateWithoutPrediksi_panenInput = {
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    penduduk?: PendudukUncheckedUpdateManyWithoutKecamatanNestedInput
    hasil_panen?: HasilPanenUncheckedUpdateManyWithoutKecamatanNestedInput
  }

  export type KomoditasUpsertWithoutPrediksi_panenInput = {
    update: XOR<KomoditasUpdateWithoutPrediksi_panenInput, KomoditasUncheckedUpdateWithoutPrediksi_panenInput>
    create: XOR<KomoditasCreateWithoutPrediksi_panenInput, KomoditasUncheckedCreateWithoutPrediksi_panenInput>
    where?: KomoditasWhereInput
  }

  export type KomoditasUpdateToOneWithWhereWithoutPrediksi_panenInput = {
    where?: KomoditasWhereInput
    data: XOR<KomoditasUpdateWithoutPrediksi_panenInput, KomoditasUncheckedUpdateWithoutPrediksi_panenInput>
  }

  export type KomoditasUpdateWithoutPrediksi_panenInput = {
    nama_komoditas?: StringFieldUpdateOperationsInput | string
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: KecamatanUpdateManyWithoutKomoditasNestedInput
    hasil_panen?: HasilPanenUpdateManyWithoutKomoditasNestedInput
  }

  export type KomoditasUncheckedUpdateWithoutPrediksi_panenInput = {
    id_komoditas?: IntFieldUpdateOperationsInput | number
    nama_komoditas?: StringFieldUpdateOperationsInput | string
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: KecamatanUncheckedUpdateManyWithoutKomoditasNestedInput
    hasil_panen?: HasilPanenUncheckedUpdateManyWithoutKomoditasNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    id_provider: string
    id_token?: string | null
    type: string
    scope?: string | null
    provider: string
    expires_at?: number | null
    token_type?: string | null
    access_token?: string | null
    refresh_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    session_token: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_provider?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_provider?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_provider?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendudukCreateManyKecamatanInput = {
    id_penduduk?: number
    data_tahun: number
    jumlah_penduduk: number
    laju_pertumbuhan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HasilPanenCreateManyKecamatanInput = {
    id_panen?: number
    id_komoditas: number
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrediksiPanenCreateManyKecamatanInput = {
    id_prediksi?: number
    id_komoditas: number
    tahun_prediksi: number
    hasil_prediksi: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PendudukUpdateWithoutKecamatanInput = {
    data_tahun?: IntFieldUpdateOperationsInput | number
    jumlah_penduduk?: FloatFieldUpdateOperationsInput | number
    laju_pertumbuhan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendudukUncheckedUpdateWithoutKecamatanInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    data_tahun?: IntFieldUpdateOperationsInput | number
    jumlah_penduduk?: FloatFieldUpdateOperationsInput | number
    laju_pertumbuhan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendudukUncheckedUpdateManyWithoutKecamatanInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    data_tahun?: IntFieldUpdateOperationsInput | number
    jumlah_penduduk?: FloatFieldUpdateOperationsInput | number
    laju_pertumbuhan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilPanenUpdateWithoutKecamatanInput = {
    tahun_panen?: IntFieldUpdateOperationsInput | number
    produksi?: FloatFieldUpdateOperationsInput | number
    luas_panen?: FloatFieldUpdateOperationsInput | number
    produktivitas?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    komoditas?: KomoditasUpdateOneRequiredWithoutHasil_panenNestedInput
  }

  export type HasilPanenUncheckedUpdateWithoutKecamatanInput = {
    id_panen?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    tahun_panen?: IntFieldUpdateOperationsInput | number
    produksi?: FloatFieldUpdateOperationsInput | number
    luas_panen?: FloatFieldUpdateOperationsInput | number
    produktivitas?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilPanenUncheckedUpdateManyWithoutKecamatanInput = {
    id_panen?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    tahun_panen?: IntFieldUpdateOperationsInput | number
    produksi?: FloatFieldUpdateOperationsInput | number
    luas_panen?: FloatFieldUpdateOperationsInput | number
    produktivitas?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrediksiPanenUpdateWithoutKecamatanInput = {
    tahun_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    komoditas?: KomoditasUpdateOneRequiredWithoutPrediksi_panenNestedInput
  }

  export type PrediksiPanenUncheckedUpdateWithoutKecamatanInput = {
    id_prediksi?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    tahun_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrediksiPanenUncheckedUpdateManyWithoutKecamatanInput = {
    id_prediksi?: IntFieldUpdateOperationsInput | number
    id_komoditas?: IntFieldUpdateOperationsInput | number
    tahun_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KecamatanCreateManyKomoditasInput = {
    id_kecamatan?: number
    nama_kecamatan: string
    deskripsi: string
    gambar: string
    area: number
    posisi_x: number
    posisi_y: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HasilPanenCreateManyKomoditasInput = {
    id_panen?: number
    id_kecamatan: number
    tahun_panen: number
    produksi: number
    luas_panen: number
    produktivitas: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PrediksiPanenCreateManyKomoditasInput = {
    id_prediksi?: number
    id_kecamatan: number
    tahun_prediksi: number
    hasil_prediksi: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KecamatanUpdateWithoutKomoditasInput = {
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    penduduk?: PendudukUpdateManyWithoutKecamatanNestedInput
    hasil_panen?: HasilPanenUpdateManyWithoutKecamatanNestedInput
    prediksi_panen?: PrediksiPanenUpdateManyWithoutKecamatanNestedInput
  }

  export type KecamatanUncheckedUpdateWithoutKomoditasInput = {
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    penduduk?: PendudukUncheckedUpdateManyWithoutKecamatanNestedInput
    hasil_panen?: HasilPanenUncheckedUpdateManyWithoutKecamatanNestedInput
    prediksi_panen?: PrediksiPanenUncheckedUpdateManyWithoutKecamatanNestedInput
  }

  export type KecamatanUncheckedUpdateManyWithoutKomoditasInput = {
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    nama_kecamatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    posisi_x?: IntFieldUpdateOperationsInput | number
    posisi_y?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilPanenUpdateWithoutKomoditasInput = {
    tahun_panen?: IntFieldUpdateOperationsInput | number
    produksi?: FloatFieldUpdateOperationsInput | number
    luas_panen?: FloatFieldUpdateOperationsInput | number
    produktivitas?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kecamatan?: KecamatanUpdateOneRequiredWithoutHasil_panenNestedInput
  }

  export type HasilPanenUncheckedUpdateWithoutKomoditasInput = {
    id_panen?: IntFieldUpdateOperationsInput | number
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    tahun_panen?: IntFieldUpdateOperationsInput | number
    produksi?: FloatFieldUpdateOperationsInput | number
    luas_panen?: FloatFieldUpdateOperationsInput | number
    produktivitas?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilPanenUncheckedUpdateManyWithoutKomoditasInput = {
    id_panen?: IntFieldUpdateOperationsInput | number
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    tahun_panen?: IntFieldUpdateOperationsInput | number
    produksi?: FloatFieldUpdateOperationsInput | number
    luas_panen?: FloatFieldUpdateOperationsInput | number
    produktivitas?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrediksiPanenUpdateWithoutKomoditasInput = {
    tahun_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kecamatan?: KecamatanUpdateOneRequiredWithoutPrediksi_panenNestedInput
  }

  export type PrediksiPanenUncheckedUpdateWithoutKomoditasInput = {
    id_prediksi?: IntFieldUpdateOperationsInput | number
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    tahun_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrediksiPanenUncheckedUpdateManyWithoutKomoditasInput = {
    id_prediksi?: IntFieldUpdateOperationsInput | number
    id_kecamatan?: IntFieldUpdateOperationsInput | number
    tahun_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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