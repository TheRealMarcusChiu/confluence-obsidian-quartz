---
title: "Java - When to Use Foo＜？＞"
created: 2022-02-08T04:09:21.391-06:00
modified: 2022-02-08T04:18:01.779-06:00
parent: "[[Java - (？ extends T) vs (？ super T)]]"
children: []
---
> [!expand-ui]- Heterogenous Tuple of Infinite Size
> One example use case of <code><font style="color: rgb(122,134,154);">Foo\<?\></font></code> is an implementation of a <code><font style="color: rgb(122,134,154);">Tuple</font></code> of infinite size storing different object types
> ```
> public class Favorites {
> 	private Map<Class<?>, Object> favorites = new HashMap<>();
>
> 	public <T> void putFavorite(Class<T> type, T instance) {
> 		Assert.assertNotNull(instance);
> 		favorites.put(type, instance);
> 	}
>
> 	public <T> T getFavorite(Class<T> type) {
> 		return type.cast(favorites.get(type));
> 	}
> }
> ```
