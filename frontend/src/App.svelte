<script lang="ts">
    import { Router, Route, Link } from "svelte5-router";

    import SidebarHeader from "@/components/layouts/SidebarHeader.svelte";
    import WindowBar from "@/components/layouts/titlebar.svelte";
    import Sidebar from "@/components/layouts/Sidebar.svelte";
    import Library from "@/components/pages/Library.svelte";
    import Trash from "@/components/pages/Trash.svelte";
    import Test from "@/components/pages/Test.svelte";
    import Editor from "./components/pages/Editor.svelte";
    import type { Component } from "svelte";

    interface RouteProps {
        path: string;
        component?: Component;
    }

    let url = $state("");
    let routes: RouteProps[] = [
        { path: "/", component: Library },
        { path: "/edit/:id", component: Editor },
        { path: "/trash", component: Trash },
        { path: "/test", component: Test },
    ];
</script>

<Router {url}>
    <SidebarHeader />
    <WindowBar />
    <Sidebar />

    {#each routes as r (r.path)}
        <Route {...r} />
    {/each}
</Router>
