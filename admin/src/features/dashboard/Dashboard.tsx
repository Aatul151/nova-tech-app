import {
  Box,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
} from '@mui/icons-material';
import { PageHeader } from '@/components/common/PageHeader';

export const Dashboard = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
      }}
    >
      <PageHeader
        title="Dashboard"
        icon="Dashboard"
        fallbackIcon={DashboardIcon}
        sx={{ mb: 0.5,  padding: 1.5 }}
      />

      {/* <PageContent>
        
      </PageContent> */}
    </Box>
  );
};

