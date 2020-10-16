<footer>
  <script>
    import dayjs from 'dayjs'

    import Social from './social'

    this.year = dayjs().format('YYYY')
  </script>

  <div class="components-footer">
    <div class="container">
      <Social></Social>
      <p>© {year} pvcresin</p>
    </div>
  </div>

  <style type="scss">
    .components-footer {
      background: #0f0f0f;
      color: white;
      > .container {
        text-align: center;
        padding: 1rem 0;
        > p {
          color: #525252;
          padding-bottom: 1rem;
        }
      }
    }
  </style>
</footer>
