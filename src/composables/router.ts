import { useRoute, useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'
import type { LocationQueryValue } from 'vue-router'

export function useQueryParams() {
  const route = useRoute()
  const router = useRouter()

  const getQueries = (): Record<string, any> => {
    const queries = { ...route.query }
    queries.page =
      typeof route.query.page === 'string' ? (Number(route.query.page) - 1).toString() : '0'
    queries.size = typeof route.query.size === 'string' ? Number(route.query.size).toString() : '10'

    return queries
  }

  const setQueries = async (props: Record<string, any>): Promise<void> => {
    await router.push({
      query: { ...route.query, ...props },
    })
  }

  return {
    getQueries,
    setQueries,
  }
}

export function useRouterHistoryCounter() {
  const router = useRouter()
  const route = useRoute()
  const query = computed(() => route.query)
  const counter = ref<number>(0)

  watch(
    query,
    () => {
      counter.value--
    },
    {
      deep: true,
      immediate: true,
    },
  )

  function back(): void {
    router.go(counter.value)
  }

  return {
    back,
  }
}
