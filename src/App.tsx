import { HeroUIProvider } from "@heroui/react"
import * as HeroUI from "@heroui/react"
import { Skeleton } from "@/components/ui/skeleton"

export function App() {
  return (
    <HeroUIProvider>
      <div className="flex min-h-svh p-6">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <div className="flex flex-col">
              <p>ShadCN Skeleton without Shimmer</p>
              <Skeleton className="h-[1.5em] w-full animate-pulse" />
              <p>ShadCN Skeleton with Shimmer</p>
              <Skeleton className="h-[1.5em] w-full shimmer" />
              <p>HeroUI v2 Skeleton with Shimmer</p>
              <HeroUI.Skeleton className="rounded-sm">
                <div className="h-[1.5em] w-full" />
              </HeroUI.Skeleton>

              <h2 className="mt-4 text-xl font-medium">
                With red bg to make shimmer visible
              </h2>
              <p>ShadCN Skeleton without Shimmer</p>
              <Skeleton className="h-[1.5em] w-full animate-pulse bg-red-200 dark:bg-red-900" />
              <p>ShadCN Skeleton with Shimmer</p>
              <Skeleton className="h-[1.5em] w-full shimmer bg-red-200 dark:bg-red-900" />
              <p>HeroUI v2 Skeleton with Shimmer</p>
              <HeroUI.Skeleton className="rounded-sm bg-red-200 dark:bg-red-900">
                <div className="h-[1.5em] w-full" />
              </HeroUI.Skeleton>
            </div>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>
    </HeroUIProvider>
  )
}

export default App
