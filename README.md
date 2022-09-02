# Descripción: Rick and Morty GraphQL API

---

El reto consiste en crear una API en GraphQL con Apollo Server, Express, Node y MongoDB. Se busca implementar conceptos de manejo de datos, populación, filtrado y desarrollo de esquemas tanto para GraphQL y MongoDB con Mongoose.


## Deploy

[![](https://img.icons8.com/color/48/000000/launched-rocket--v1.png)](https://api-graphql-josrenyer.herokuapp.com/)


# Parte 1 - Queries Requeridas

---

### 1. characters(page: Int): Characters!

Request que trae todos los personajes de la base de datos, separados en páginas de 20 personajes.

| Parametros | Tipo |
| --- | --- |
| page | Int |

Ejemplo para probar esta query

```jsx
query characters {
  characters(page: 2) {
    info {
      next
      pages
      count
      prev
    }
    results {
      id	
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        id
      }
      image
      episode {
        id
      }
      created
    }
  }
}
```

### 2. character(id: ID!): Character

Request que trae un sólo personaje de la base de datos, utilizando su ID

| Parámetros | Tipo |
| --- | --- |
| id | ID! |

Ejemplo para probar esta query

```jsx
query character {
  character(id: "5d299c853d1d85c017cc3e01") {
    id
    origin {
      name
    }
    location {
      name
    }
    image
    created
  }
}
```

### 3. **episodes(page: Int): Episodes!**

Request que trae todos los episodios de la base de datos, separados en páginas de 20 episodios.

| Parámetros | Tipo |
| --- | --- |
| page | Int |

Ejemplo para probar esta query

```jsx
query episodes{
  episodes(page: 1) {
     info {
      next
      pages
      count
      prev
    }
    results {
      id	
      name
      air_date
      episode
      characters {
        id
        name
      }
      created
    }
  }
}
```

### 4. **episode(id: ID!): Episode**

Request que trae un sólo episodio de la base de datos, utilizando su ID

| Parámetros | Tipo |
| --- | --- |
| id | ID! |

Ejemplo para probar esta query

```jsx
query episode {
  episode(id: "5d299b853d1d85c017cc3e03") {
    id
    name
    air_date
    episode
    characters {
      id
      name
    }
    created
  }
}
```

### 5. **locations(page: Int): Locations!**

Request que trae todas ubicaciones de la base de datos, separadas en páginas de 20 ubicaciones.

| Parámetros | Tipo |
| --- | --- |
| page | Int |

Ejemplo para probar esta query

```jsx
query locations {
  locations(page: 3) {
     info {
      next
      pages
      count
      prev
    }
    results {
      id
      name
      name
      type
      dimension
      residents {
        id
      }
      created
    }
  }
}
```

### 6. **location(id: ID!): Location**

Request que trae una sola ubicación de la base de datos, utilizando su ID

| Parámetros | Tipo |
| --- | --- |
| page | Int |

Ejemplo para probar esta query

```jsx
query locations {
  locations(page: 3) {
     info {
      next
      pages
      count
      prev
    }
    results {
      id
      name
      name
      type
      dimension
      residents {
        id
      }
      created
    }
  }
}
```

### 7. **location(id: ID!): Location**

Request que trae una sola ubicación de la base de datos, utilizando su ID

| Parámetros | Tipo |
| --- | --- |
| id | ID! |

Ejemplo para probar esta query

```jsx
query location {
  location(id: "5d299a853d1d85c017cc3e52") {
    id
    name
    name
    type
    dimension
    residents {
      id
    }
    created
  }
}
```