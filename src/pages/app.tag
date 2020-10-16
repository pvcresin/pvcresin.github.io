<app>
  <script>
    import route from 'riot-route/lib/tag'

    import Top from './top'
    import Profile from './profile'
    import ProjectAll from './projectAll'
    import ProjectDetail from './projectDetail'
    import Other from './other'
  </script>

  <router>
    <route path="">
      <Top></Top>
    </route>
    <route path="profile..">
      <Profile></Profile>
    </route>
    <route path="projects/*">
      <ProjectDetail></ProjectDetail>
    </route>
    <route path="projects..">
      <ProjectAll></ProjectAll>
    </route>
    <route path="..">
      <Other></Other>
    </route>
  </router>
</app>
