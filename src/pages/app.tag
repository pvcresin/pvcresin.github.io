<app>
  <router>
    <route path="">
      <top></top>
    </route>
    <route path="profile..">
      <profile></profile>
    </route>
    <route path="projects/*">
      <projectDetail></projectDetail>
    </route>
    <route path="projects..">
      <projectAll></projectAll>
    </route>
    <route path="..">
      <other></other>
    </route>
  </router>

  <script>
    import route from 'riot-route/lib/tag'
    import top from './top'
    import profile from './profile'
    import projectAll from './projectAll'
    import projectDetail from './projectDetail'
    import other from './other'
  </script>
</app>
