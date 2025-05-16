'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Button,
  Typography,
  IconButton,
  ButtonGroup,
  Link,
} from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import CloseIcon from '@mui/icons-material/Close';

interface QRCodeModalProps {
  open: boolean;
  onClose: () => void;
  mainLink: string;
  alternativeLink?: string;
  mirror1?: string;
  mirror2?: string;
  title?: string;
  message?: string;
  countdown: number;
}

export default function QRCodeModal({
  open,
  onClose,
  mainLink,
  alternativeLink,
  mirror1,
  mirror2,
  title = 'QR Code',
  message,
  countdown,
}: QRCodeModalProps) {
  const [activeLink, setActiveLink] = useState<'main' | 'alternative' | 'mirror1' | 'mirror2'>('main');
  const [showLinks, setShowLinks] = useState({
    alternative: false,
    mirror1: false,
    mirror2: false,
  });

  const handleClose = () => {
    setActiveLink('main');
    setShowLinks({
      alternative: false,
      mirror1: false,
      mirror2: false,
    });
    onClose();
  };

  const handleReveal = (type: 'main' | 'alternative' | 'mirror1' | 'mirror2') => {
    setActiveLink(type);
    if (type !== 'main') {
      setShowLinks(prev => ({ ...prev, [type]: true }));
    }
  };

  const getCurrentLink = () => {
    switch (activeLink) {
      case 'alternative':
        return alternativeLink;
      case 'mirror1':
        return mirror1;
      case 'mirror2':
        return mirror2;
      default:
        return mainLink;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          padding: 1,
        },
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        pb: 1,
      }}>
        <Typography variant="h6">
          {title} (Closing in {countdown}s)
        </Typography>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {message && (
          <Typography variant="body1" color="success.main" sx={{ mb: 2 }}>
            {message}
          </Typography>
        )}
        <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <QRCodeSVG
              value={getCurrentLink() || ''}
              size={256}
              level="H"
              includeMargin
            />
          </Box>

          <ButtonGroup variant="outlined" aria-label="QR code links">
            <Button
              variant={activeLink === 'main' ? 'contained' : 'outlined'}
              onClick={() => handleReveal('main')}
            >
              Main Link
            </Button>
            {alternativeLink && (
              <Button
                variant={activeLink === 'alternative' ? 'contained' : 'outlined'}
                onClick={() => handleReveal('alternative')}
                disabled={showLinks.alternative}
              >
                Alternative Link
              </Button>
            )}
            {mirror1 && (
              <Button
                variant={activeLink === 'mirror1' ? 'contained' : 'outlined'}
                onClick={() => handleReveal('mirror1')}
                disabled={showLinks.mirror1}
              >
                Mirror 1
              </Button>
            )}
            {mirror2 && (
              <Button
                variant={activeLink === 'mirror2' ? 'contained' : 'outlined'}
                onClick={() => handleReveal('mirror2')}
                disabled={showLinks.mirror2}
              >
                Mirror 2
              </Button>
            )}
          </ButtonGroup>

          {showLinks.alternative && alternativeLink && (
            <Typography variant="body2" color="text.secondary" align="center">
              <Link href={alternativeLink} target="_blank" rel="noopener noreferrer">
                {alternativeLink}
              </Link>
            </Typography>
          )}
          {showLinks.mirror1 && mirror1 && (
            <Typography variant="body2" color="text.secondary" align="center">
              <Link href={mirror1} target="_blank" rel="noopener noreferrer">
                {mirror1}
              </Link>
            </Typography>
          )}
          {showLinks.mirror2 && mirror2 && (
            <Typography variant="body2" color="text.secondary" align="center">
              <Link href={mirror2} target="_blank" rel="noopener noreferrer">
                {mirror2}
              </Link>
            </Typography>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
} 