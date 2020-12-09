为了安全可靠，polyfill/shim必须运行于所有其他代码之前，而且需要同步加载，或者说，需要在所有polyfill/shim加载之后，再去加载所有应用程序代码。    

社区中存在许多误解，即现代浏览器“不需要”polyfill，或者 polyfill/shim 仅用于添加缺失功能 - 实际上，它们通常用于修复损坏实现(repair broken implementation)，即使是在最现代的浏览器中，也会出现这种情况。 因此，最佳实践仍然是，不加选择地和同步地加载所有 polyfill/shim，尽管这会导致额外的 bundle 体积成本。